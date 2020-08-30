// const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge')
const { build } = require('../config')
const processEnv = require('../config/prod.env')
const baseWebpackConfig = require('./webpack.base.config')
const prodWebpackConfig = {
  devtool:build.de,
  optimization: {
    minimize: false,
    minimizer: [new TerserJSPlugin()],
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':JSON.stringify(processEnv)
    }),
    // new UglifyjsWebpackPlugin({
    //   parallel: true
    // }),
    new CleanWebpackPlugin()
],
mode:'production'
}
const webpackConfig = merge(baseWebpackConfig,prodWebpackConfig)
// if(build.productionGizp){
//   const CompressionWebpackPlugin = require('compression-webpack-plugin')
//   const productionGzipExtensions = build.productionGzipExtensions||[]
//   webpackConfig.plugins.push(new CompressionWebpackPlugin({
//     filename: '[path].gz[query]',
//     algorithm: 'gzip',
//     test: new RegExp(`\\.(${productionGzipExtensions.join('|')})`),
//     threshold: 10240,
//     minRatio: 0.8
//   }))
// }
// if(build.bundleAnalyzer){
//   const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }
module.exports = webpackConfig