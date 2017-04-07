var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin'); // copy html with additional mumbo jumbo - adding bundle js etc
var CopyWebpackPlugin = require('copy-webpack-plugin'); // plugin to copy dirs
var CleanWebpackPlugin = require('clean-webpack-plugin'); // cleaning before build and removing file afterwards.

const path = require('path');

module.exports = {
    entry : './app/main.ts',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : './app/bundle.js'
    },
    module :{
        loaders : [
            {
                test : /\.ts$/, loader : 'ts-loader'
            },
            {
                test: /\.scss$/,
                loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    resolve : {
        extensions : ['.js','.ts']
    }    ,
    plugins : [
         new CleanWebpackPlugin(['dist'], {
            root: './',
            verbose: true,
            dry: false
        }),
        new htmlWebpackPlugin({
            template : path.resolve(__dirname, 'index.html')
        }), 
        new CopyWebpackPlugin([
            { from: 'app/**/*.html', to: path.resolve(__dirname, 'dist') } , // all htmls templates
            { from: 'app/**/*.css', to: path.resolve(__dirname, 'dist') } , // all template css
            { from: 'server.js', to: path.resolve(__dirname, 'dist') } , // server .js
            { from: "node_modules/es6-shim/es6-shim.min.js", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "node_modules/es6-shim/es6-shim.map", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "node_modules/zone.js/dist/zone.min.js", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "node_modules/reflect-metadata/Reflect.js", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "node_modules/reflect-metadata/Reflect.js.map", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "node_modules/toastr/build/toastr.min.js", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "node_modules/toastr/build/toastr.css", to: path.resolve(__dirname, 'dist/lib') } , //all libs
            { from: "scss/site.css", to: path.resolve(__dirname, 'dist/css/site.css') } , //all libs
        ])

    ]
};
