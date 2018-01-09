// webpack 生产配置
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const packageConfig = require(path.resolve(__dirname, '../package.json'))
let config = require('./webpack.base.config')

module.exports = merge(config, {
  output: {
    path: path.resolve(__dirname, '..', 'dist'), // 生产静态资源打包后放置的文件夹
    publicPath: '/dist/' // 生产静态资源引用path
  },
  devtool: false,
  module: {
    rules: [
      { // 生产环境下, 提取css文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader?minimize',
            fallback: 'vue-style-loader'
        }),
        exclude: /node_modules/
      }
    ]
  },
  performance: {
    hints: 'warning'
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ExtractTextPlugin({
          filename: 'common.[chunkhash].css'
      })
  ]
});