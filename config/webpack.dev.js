var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const path = require('path');


module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    filename: './app/[name].js',
    chunkFilename: './app/[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('./app/[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});