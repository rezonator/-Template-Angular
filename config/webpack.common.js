var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin'); // plugin to copy dirs
var helpers = require('./helpers');

const path = require('path');

module.exports = {
  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'app': './app/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular-router-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      } 
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
     new CopyWebpackPlugin([
            { from: 'app/**/*.html', to: helpers.root('dist') } , // all htmls templates
            { from: 'app/**/*.css', to: helpers.root('dist') } , // all template css
            { from: 'server.js', to: helpers.root('dist') } , // server .js
            { from: "node_modules/es6-shim/es6-shim.min.js", to: helpers.root('dist', 'lib') } , //all libs
            { from: "node_modules/es6-shim/es6-shim.map", to: helpers.root('dist', 'lib') } , //all libs
            { from: "node_modules/zone.js/dist/zone.min.js", to: helpers.root('dist', 'lib') } , //all libs
            { from: "node_modules/reflect-metadata/Reflect.js", to: helpers.root('dist', 'lib') } , //all libs
            { from: "node_modules/reflect-metadata/Reflect.js.map", to: helpers.root('dist', 'lib') } , //all libs
            { from: "node_modules/toastr/build/toastr.min.js", to: helpers.root('dist', 'lib') } , //all libs
            { from: "node_modules/toastr/build/toastr.css", to: helpers.root('dist', 'lib') } , //all libs
            { from: "scss/site.css", to: helpers.root('dist','css','site.css') } , //all libs
        ])
  ]
};