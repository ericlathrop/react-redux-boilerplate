var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require("fs");

var babelOptions = JSON.parse(fs.readFileSync(".babelrc"));

module.exports = {
	entry: {
		app: [ "." ]
	},
	devServer: {
		historyApiFallback: true
	},
	devtool: "source-map",
	output: {
		path: __dirname + "/build",
		publicPath: "/assets/",
		filename: "[name].js"
	},
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
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: babelOptions
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style", ["css", "autoprefixer", "sass"])
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	],
	sassLoader: {
	}
};
