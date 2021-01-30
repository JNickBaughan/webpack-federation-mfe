const { Module } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/bootstrap",
      },
      shared: {
        faker: {
          singleton: true,
        },
      },
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.png|jpg$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
    ],
  },
};
