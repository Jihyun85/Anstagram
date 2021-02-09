const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ENTRY = path.resolve(__dirname, assets, js, main.js);
const OUTPUT_DIR = path.join(__dirname, "static");

const MODE = process.env.WEBPACK_ENV;

module.exports = {
  devtool: "cheap-module-source-map",
  entry: ENTRY,
  mode: MODE,
  output: {
    filename: "[name].js",
    path: OUTPUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugin: [new MiniCssExtractPlugin({ filename: "style.css" })],
};
