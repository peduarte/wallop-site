var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'eval',

  entry: [
    './src/app',
    './src/index.html'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

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
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    }]
  }

};
