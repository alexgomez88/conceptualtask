//@ts-check

"use strict";

const path = require("path");
const webpack = require("webpack");


/**@type {import('webpack').Configuration}*/
const vsCodeConfig = {
  mode: "none",
  entry: './src/app/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../out'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
    })
],
};
module.exports = vsCodeConfig;
