const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode: "production",
	entry: path.resolve("src", "index.js"),
	output: {
		//filename: "bundle.[contenthash].js",
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				use: "babel-loader",
				resolve: {
					extensions: [".js", ".jsx"],
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve("public", "index.html"),
		}),
	],
}
