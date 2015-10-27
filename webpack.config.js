module.exports = {
	entry: ".",
	devtool: "source-map",
	output: {
		path: __dirname + "/build",
		filename: "app.js"
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
