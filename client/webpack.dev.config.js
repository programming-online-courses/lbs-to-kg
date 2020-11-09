const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', ".js", '.tsx'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
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