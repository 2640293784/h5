const host = 'http://192.168.1.100:3001'
//const host = 'http://192.168.1.102:3001'
const porxyTable = {
  '/api': {
    target: host, //设置调用接口域名和端口号别忘了加http
    changeOrigin: true,
    pathRewrite: {
      '^/api': 'v1/api'
    }
  }
}
module.exports = {
  dev: {
    env:"development",
    open_proxy:true, //devEnv.OPEN_PROXY为true开启代理
    proxy: porxyTable,
    port: 8000,//端口
    host: '192.168.1.100',
    devtool: 'eval-source-map',
    //source-map产生一个映射文件
    //eval-source-map不会产生单独的文件，但是会产生行和列
    //cheap-module-source-map产生后可以保留起来
    //cheap-module-eval-source-map不会产生文件，集成在打包后的文件中，不会产生列
    openBrowser: true,
    contentBasePath: '../dist',//打包文件名称
    progress: true,//是否开启进度条
    errorOverlay: true
  },
  build: {
    env:"production"
    //devtool: 'cheap-module-eval-source-map'
    // productionGizp:false,
    // productionGzipExtensions:['js','css'],
    // bundleAnalyzer:false
  }
}