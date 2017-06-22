const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = Object.create(baseConfig);
config.plugins = config.plugins.concat([
  new ExtractTextPlugin({filename: 'react-player.css', allChunks: true }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify('development')
  })
]);

module.exports = config;
