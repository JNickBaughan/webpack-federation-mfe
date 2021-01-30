const { Module } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        cart: "cart@http://localhost:3001/remoteEntry.js",
        products: "products@http://localhost:3002/remoteEntry.js",
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
