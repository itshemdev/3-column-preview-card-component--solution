const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: './src/js/script.js',
  },
  
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/public/index.html", }),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpg|png)$/,
        type: "asset/resource",
      },
    ],
  },
};