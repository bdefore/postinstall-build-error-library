const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = Object.create(baseConfig);
config.plugins = config.plugins.concat([
  new ExtractTextPlugin({filename: 'react-player.css', allChunks: true }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    comments: false,
    compressor: {
      screw_ie8: true,
      warnings: false
    },
  }),
]);

module.exports = config;
