const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Grace Yu Here is the Template!!!',
    template: 'src/assets/index.html'
  })]
};
