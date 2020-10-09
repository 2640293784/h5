const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve (src) {
  return path.join(__dirname, '..', src);
}
module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/main.js"]
  },
  output: {
    filename: "js/[name].[hash:10].js",
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
        //include:path.resolve(__dirname,'src')
      },
      {
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        enforce: "pre",
        //指定检查的目录
        include: [resolve('src')],
        //eslint检查报告的格式规范
        options: {
        formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: {
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            }
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            esModule: false,
            outputPath: "images/"
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('src/assets', 'fonts/[name].[hash:7].[ext]'),
        }
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,//去除“”
        collapseBooleanAttributes: true  //打包到一行
      },
      hash: true //文件后边加上hash，避免缓存
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolve('static'),
        to: 'static'
      }]
    }),
    new vueLoaderPlugin(),
    new webpack.BannerPlugin('2020 版权所有black!')//版权申明插件
  ],
  resolve: {
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.vue', '.json', '.css', '.less'],
    alias: {
      "@": resolve('src'),
      "@assets": resolve('src/assets'),
      "@view": resolve('src/views'),
      "@utils": resolve('src/utils'),
      "@img": resolve('src/assets/img')
    }
  },
  // 引入外部库, 无需webpack打包处理
  externals: {
    'vue': 'Vue',
    'vant': 'vant'
  }
}