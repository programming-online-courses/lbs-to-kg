const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const sassLoader = {
  test: /\.(css|scss)$/,
  /** You can't put here exclude node_modules,
   * otherwise typescript-roboto will not work*/
  use: [
    {
      loader: "style-loader",

    },
    {
      loader: "css-loader",

    },
    {
      loader: "sass-loader",
    },
  ]
};

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      { test: /\.tsx$/, loader: "ts-loader" },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              outputPath: 'static/fonts'
            }
          },
        ],
      },
      sassLoader
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {from: 'public'}
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9001,
  }
}