const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const autoprefixer=require('autoprefixer')
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge')
const { build } = require('../vue.config')
const processEnv = {
  ENV:build.env
}
const baseWebpackConfig = require('./webpack.base.config')
const prodWebpackConfig = {
  devtool:build.devtool,
  optimization: {
    minimize: false,
    minimizer: [new TerserJSPlugin()],
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env':JSON.stringify(processEnv)
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:10].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
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
module.exports = webpackConfig