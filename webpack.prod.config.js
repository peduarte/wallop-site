var config = require('./webpack.config.js');
var webpack = require('webpack');

config.devtool = 'source-map';

config.entry = [
  './client/src/app',
  './client/src/index.html'
];

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify("production")
    }
  })
);

// This is supposed to uglify the JS
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
);

module.exports = config;
