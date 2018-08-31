const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	},
	module:{
        rules:[
            {
                test: /\.scss$/,
                use : [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true,
                        //     importLoaders: 1,
                        //     localIdentName: '[path]__[name]__[local]__[hash:base64:5]'
                        // }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })
                            ]
                        }
                    },
                    'sass-loader',
                ]
            }, 
            {
            	test: /\.(png|jp(e*)g)$/,
            	loader: 'url-loader',
            	options: { 
                    limit: 8000,
                    name: 'images/[hash]-[name].[ext]'
                } 
            },  
            {
                test: /\.svg$/,
                loader: 'file-loader'
            },  
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
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