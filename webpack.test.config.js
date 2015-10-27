var fs = require("fs");

var nodeModules = {};
fs.readdirSync("node_modules")
	.filter(function(x) {
		return [".bin"].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = "commonjs " + mod;
	});

module.exports = {
	entry: {
		test: [ "./test/index.js" ]
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
	},
	externals: nodeModules,
	target: "node"
};
