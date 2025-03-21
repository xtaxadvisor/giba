/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
// webpack.config.cjs
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.ts", // adjust to .tsx if needed
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};