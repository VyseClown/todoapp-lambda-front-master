const path = require("path");
module.exports = {
  // define entry file and output
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  // define babel loader, damn has been months since I needed to config this haha
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
};
