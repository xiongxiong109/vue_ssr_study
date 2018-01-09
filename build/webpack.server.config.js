const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

// server 与client 都引入同样的配置, 只是针对环境变量做一些区别处理
const dev = require('./webpack.dev.config')
const prod = require('./webpack.prod.config')
const isProd = process.env.NODE_ENV === 'production'
const base = isProd ? prod : dev

module.exports = merge(base, {
	target: 'node',
	entry: './src/entry-server.js',
	output: {
	  filename: '[name].[chunkhash:5].js',
	  libraryTarget: 'commonjs2' // 服务端的模块化方案, 采用commonjs
	},
	externals: nodeExternals({
	  // do not externalize CSS files in case we need to import it from a dep
	  whitelist: /\.css$/
	}),
	plugins: [
	  new webpack.DefinePlugin({
	    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
	    'process.env.VUE_ENV': '"server"'
	  }),
	  new VueSSRServerPlugin()
	]
});