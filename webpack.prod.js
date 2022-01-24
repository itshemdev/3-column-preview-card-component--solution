const path = require("path");
const { merge } = require("webpack-merge")
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: 'inline-source-map',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    
    output: {
      filename: "main.[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: 'images/[name].[hash].[ext]',
    },
    plugins: [new CleanWebpackPlugin()],
});