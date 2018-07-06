var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	},
	module:{
    	rules:[
    		{
        		test:/\.css$/,
        		use:['style-loader','css-loader']
    		}
   		]
	},
	devServer: {
        contentBase: path.join(__dirname, "./dist/"),
        port: 9000
    },
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project Demo',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './src/index.html'
		})
	]
}