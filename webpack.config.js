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
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader" }
		],
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};
