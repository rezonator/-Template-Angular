const argv = require("yargs").argv;
const browserify = require("browserify");
const browserSync = require("browser-sync").create();
const buffer = require("vinyl-buffer");
const cache = require("gulp-cached");
const concat = require("gulp-concat");
const exec = require('child_process').exec;
const gulp = require("gulp");
const gulpIf = require("gulp-if");
const htmlmin = require("gulp-htmlmin");
const inject = require("gulp-inject");
const sass = require("gulp-sass");
const source = require("vinyl-source-stream");
const sourcemaps = require("gulp-sourcemaps");
const tsify = require("tsify");
const tslint = require("gulp-tslint");
const uglify = require("gulp-uglify");
const watchify = require("watchify");
const zip = require("gulp-zip");
const fork = require('child_process').fork;

const rootBuildPath = "./dist/";
const cssBundleName = "site.css";
const cssBundleBuildPath = rootBuildPath + "/css/" + cssBundleName;
const cssSource = "./scss/site.scss";
const cssBuildPath = rootBuildPath + "css";
const fontSource = "./bower_components/weather-icons/font/**";
const fontBuildPath = rootBuildPath + "font";
const htmlSource = "./index.html";
const imgSource = "./assets/img/*.jpg";
const imgBuildPath = "./dist/img";
const jsBundleName = "bundle.js";
const jsBundleBuildDirectory = rootBuildPath + "app";
const jsBundleBuildPath = jsBundleBuildDirectory + "/bundle.js";
const jsSourceDirectory = "./app";
const jsEntryPoint = jsSourceDirectory + "/main.ts";
const jsSource = jsSourceDirectory + "/**/*.ts";
const libSource = [
    "node_modules/es6-shim/es6-shim.min.js",
    "node_modules/es6-shim/es6-shim.map",
    "node_modules/zone.js/dist/zone.min.js",
    "node_modules/reflect-metadata/Reflect.js",
    "node_modules/reflect-metadata/Reflect.js.map",
    "node_modules/toastr/build/toastr.min.js",
    "node_modules/toastr/build/toastr.css"
];
const libBuildPath = rootBuildPath + "/lib";
const serverSource = "./server.js";
const templatesSource = "./app/**/*.html";
const templatesBuildPath = rootBuildPath + "app";
const typings = "./typings/index.d.ts";

function logError(err) {
    console.error(err.message);
    this.emit("end");
}

function isReleaseMode() {
    return argv.release;
}

gulp.task("lint", function () {
    gulp.src(jsSource)
        .pipe(tslint({
			formatter: "verbose"
		}))
		.pipe(tslint.report())
        .on("error", logError);
});

var browserifyOptions = {
    debug: !isReleaseMode(),
    entries: [jsEntryPoint, typings],
    plugin: [tsify]
};

if (argv.watch) {
    browserifyOptions.cache = {};
    browserifyOptions.packageCache = {};
    browserifyOptions.plugin.push(watchify);
}

var browserifyInstance = browserify(browserifyOptions);

// If were NOT in prod - ignore this file conditionally!
// that way it will compile but after - js will not be included :>
if(!isReleaseMode()) {
    browserifyInstance.ignore(require.resolve("./app/prod.ts"));
}

// gulp.task("js", ["lint"], function () {
gulp.task("js",function () {
    return browserifyInstance
        .bundle()
        .on("error", logError)
        .pipe(source(jsBundleName))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpIf(isReleaseMode(), uglify().on("error", logError)))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(jsBundleBuildDirectory));
});

gulp.task("css", function () {
    return gulp.src(cssSource)
        .pipe(concat(cssBundleName))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: isReleaseMode() ? "compressed" : "nested"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(cssBuildPath))
        .pipe(browserSync.stream());
});

gulp.task("font", function () {
    return gulp.src(fontSource)
        .pipe(gulp.dest(fontBuildPath));
})

gulp.task("img", function () {
    return gulp.src(imgSource)
        .pipe(gulp.dest(imgBuildPath));
});

gulp.task("lib", function () {
    return gulp.src(libSource)
        .pipe(gulp.dest(libBuildPath));
});

gulp.task("templates", function () {
    return gulp.src(templatesSource)
        .pipe(gulp.dest(templatesBuildPath));
});

gulp.task("html", ["js", "css"], function () {
    return gulp.src(htmlSource)
        .pipe(inject(gulp.src([jsBundleBuildPath, cssBundleBuildPath], {read: false}), {ignorePath: "dist"}))
        .pipe(gulpIf(isReleaseMode(), htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest(rootBuildPath));
});

gulp.task("server", function () {
    return gulp.src(serverSource)
        .pipe(gulp.dest(rootBuildPath));
})

gulp.task("default", ["font", "html", "img", "lib", "templates", "server"]);

gulp.task("html-watch", ["html"], () => browserSync.reload());
gulp.task("js-watch", ["js"], () => browserSync.reload());
gulp.task("templates-watch", ["templates"], () => browserSync.reload());

gulp.task("watch", ["default"], function () {
    gulp.watch(htmlSource, ["html-watch"]);
    gulp.watch(jsSource, ["js-watch"]);
    gulp.watch(templatesSource, ["templates-watch"]);
    gulp.watch(cssSource, ["css"]);
});

gulp.task("dev", ["watch"], function () {
	fork("dist/server");
    browserSync.init({
		port: 8003,
        proxy: "http://localhost:3011"
    });
});

// Prepare for deployment.
gulp.task("package", function () {
    gulp.src([rootBuildPath + "/**", "./package.json"])
        .pipe(zip("deploy.zip"))
        .pipe(gulp.dest("."));
});