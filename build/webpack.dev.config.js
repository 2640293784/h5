const merge = require('webpack-merge')
const portfinder = require('portfinder')
const webpack = require('webpack')
const path = require('path')
const FrendlyErrorsWebpackPlugins = require('friendly-errors-webpack-plugin')
const autoprefixer = require('autoprefixer')
const { dev } = require('../vue.config')
const baseWebpackConfig = require('./webpack.base.config')
const { ipconfig, createPort } = require('./utils')
const processEnv = {
  ENV:dev.Env,
  OPEN_PROXY:dev.open_proxy||false,//是否开启代理
  PORT:dev.port,
  HOST:dev.host
}
const serverPort = createPort(dev.port)
let setServerPort = dev.port
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
  module: {
    rules: [
      {
        test: /\.css/,
        use:[
        'style-loader' ,
        'css-loader',
        {
          loader:'postcss-loader', // 跟MiniCssExtractPlugin.loader一起使用时 要添加 使用范围
          options:{
            plugins:[
              autoprefixer({
                overrideBrowserslist: ['last 5 version', '>1%', 'ios 7']
              })
            ]
          }
        }]
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          {
            loader:'postcss-loader', // 跟MiniCssExtractPlugin.loader一起使用时 要添加 使用范围
            options:{
              plugins:[
                autoprefixer({
                  overrideBrowserslist: ['last 5 version', '>1%', 'ios 7']
                })
              ]
            }
          },
          'less-loader']
      }
    ]
  },
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
    host: dev.host,
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
  portfinder.basePort = dev.port
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