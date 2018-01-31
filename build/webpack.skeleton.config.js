// 骨架入口配置
const path = require('path')
const nodeExternals = require('webpack-node-externals') // Node 端

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, '..', 'src', 'entry-skeleton.js'),
  output: {
    libraryTarget: 'commonjs2' // 服务端采用commonjs规范
  },
  externals: nodeExternals({
    whitelist: /\.css$/
  })
}