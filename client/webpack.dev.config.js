const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', ".js"],
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: 'public'}
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9002,
  }
}