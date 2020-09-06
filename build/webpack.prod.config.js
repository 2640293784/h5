// const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer=require('autoprefixer')
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge')
const { build } = require('../config')
const processEnv = require('../config/prod.env')
const baseWebpackConfig = require('./webpack.base.config')
const prodWebpackConfig = {
  devtool:build.devtool,
  optimization: {
    minimize: false,
    minimizer: [new TerserJSPlugin()],
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':JSON.stringify(processEnv)
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:10].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new CleanWebpackPlugin()
],
module:{
  rules:[
    {
      test: /\.css/,
      use:[ 
        MiniCssExtractPlugin.loader,
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
        }
      ]
    },
    {
      test: /\.less$/,
      loader: [ 
        MiniCssExtractPlugin.loader,
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
        'less-loader'
        ]
    }
  ]
},
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