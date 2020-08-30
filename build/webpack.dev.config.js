const merge = require('webpack-merge')
const portfinder = require('portfinder')
const webpack = require('webpack')
const path = require('path')
const FrendlyErrorsWebpackPlugins = require('friendly-errors-webpack-plugin')
const { dev } = require('../config')
const processEnv = require('../config/dev.env')
const baseWebpackConfig = require('./webpack.base.config')
const { ipconfig, createPort } = require('./utils')
const { PORT, HOST } = processEnv
const serverPort = createPort(dev.port || PORT)
let setServerPort = dev.port || PORT
serverPort.then(res => {
  setServerPort = res
})
const devWebpackConfig = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(processEnv)
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  watch: true,
  //监听配置
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 1000,
    ignored: /node_modules/
  },
  devtool: dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    publicPath: dev.accetsPublicPath,
    port: setServerPort,
    host: dev.host || HOST,
    progress: true,//运行进度条
    hot: true,
    historyApiFallback: true,
    open: dev.openBrowser || false,
    overlay: dev.errorOverlay ? { warnings: false, errors: true } : false,
    contentBase: path.join(__dirname, dev.contentBasePath),
    proxy: dev.proxy,
    compress: true,
    quiet: true
  }
}
const webpackConfig = merge(baseWebpackConfig, devWebpackConfig)
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = dev.port || PORT
  portfinder.getPort((err, port) => {
    if (err)
    {
      reject(err);
    } else
    {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      webpackConfig.plugins.push(new FrendlyErrorsWebpackPlugins({
        compilationSuccessInfo: {
          messages: [
            '你的应用程序在:',
            `http://${webpackConfig.devServer.host}:${port}`,
            `http://${ipconfig()}:${port}`]
        },
        clearConsole: true
      }))
      // add port to devServer config
      webpackConfig.devServer.port = port
      resolve(webpackConfig)
    }
  })
})