var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'eval',

  // http://gaearon.github.io/react-hot-loader/getstarted/
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './client/src/app',
    './client/src/index.html',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new ExtractTextPlugin('styles.css'), // extracts css
    new webpack.HotModuleReplacementPlugin(), // hot-mode
    new webpack.NoErrorsPlugin() // https://github.com/webpack/docs/wiki/list-of-plugins#noerrorsplugin
  ],

  // resolve paths: http://webpack.github.io/docs/resolving.html
  resolve: {
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.html?$/,
      loaders: ['html-loader', 'file-loader?name=[name].[ext]']
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
    },
    {
      test: /\.json?$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    }]
  }

};
