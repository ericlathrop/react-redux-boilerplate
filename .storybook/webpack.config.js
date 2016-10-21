var autoprefixer = require("autoprefixer");
var fs = require("fs");
var path = require("path");

var babelOptions = JSON.parse(fs.readFileSync(".babelrc"));

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: babelOptions
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "postcss", "sass"]
      }
    ]
  },
  plugins: [
  ],
  postcss: function() {
    return [autoprefixer({ browsers: ["last 2 versions"] })];
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  sassLoader: {
  }
};
