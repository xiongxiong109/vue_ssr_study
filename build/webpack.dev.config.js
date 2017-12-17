const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
let config = require('./webpack.base.config')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

config.devtool = '#cheap-module-source-map'
config.performance.hints = false

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.rules.push({
    test: /\.less$/,
    use: ['vue-style-loader','less-loader','postcss-loader']
}, {
    test: /\.css$/,
    use: ['vue-style-loader','css-loader','postcss-loader']
}); 

config = merge(config,{
    plugins: [
        new FriendlyErrorsPlugin(),
        new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: 9090,
            proxy: 'http://localhost:8080',
            logConnections: false,
            notify: false,
            open: false
          }, {
            reload: false
        })
    ]
})

module.exports = config;