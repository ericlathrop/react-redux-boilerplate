module.exports = {
	entry: {
		app: [ "." ]
	},
	devtool: "source-map",
	output: {
		path: __dirname + "/build",
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