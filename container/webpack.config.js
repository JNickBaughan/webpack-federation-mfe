const { Module } = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        cart: "cart@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};
