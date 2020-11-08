const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const HappyPack = require('happypack')
const os = require('os')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const { dev, build } = require('../vue.config')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const isDrop = process.env.NODE_ENV === 'production'
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
          loader: 'happypack/loader?id=happyBabel',
        }
        //include:path.resolve(__dirname,'src')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: {
              use: ['css-loader', 'less-loader'],
              fallback: 'vue-style-loader'
            },
            minimize: isDrop,
            sourceMap: isDrop?build.sourceMap:dev.sourceMap,
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
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('src/assets','media/[name].[hash:7].[ext]')
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
    new HappyPack({
      id: 'happyBabel', //用id来标识 happypack处理那里类文件
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true',//如何处理  用法和loader 的配置一样
      }],
      threadPool: happyThreadPool, //共享进程池
      verbose: true,//允许 HappyPack 输出日志
    }),
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