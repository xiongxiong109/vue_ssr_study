const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')

// webpack 基本配置
module.exports = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name].[chunkhash:5].js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.less'], // 解析文件后缀
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
	},
	module: {
		noParse: /es6-promise\.js$/, // avoid webpack shimming process
		rules: [
			{
				test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10240, // 10KB 以下使用 base64
          name: 'img/[name]-[hash:6].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
      }
		]
	},
	performance: {
	  maxEntrypointSize: 300000 // 性能提示 300bytes
	},
	plugins: []
}