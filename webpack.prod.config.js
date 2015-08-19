var config = require('./webpack.config.js');
var webpack = require('webpack');

config.devtool = 'source-map';

config.cssnext = {
  browsers: "last 2 versions",
  compress: false
},

config.cssloader = {
  aggressiveMerging: false
},

config.entry = [
  './src/app',
  './src/index.html'
];

config.output.publicPath = './',

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
