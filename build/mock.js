const express = require('express');    //引入express模块
const path = require('path')
const bodyParser = require('body-parser');
const portfinder = require('portfinder')
const { ipconfig } = require('./utils')
// var Mock = require('mockjs')
let app = express();                //实例化express
const port = 8090
app.use(express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.json())
app.use(require('body-parser').urlencoded({ extended: true }))
/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
  }else {
    const { method, path, query } = req
    if(req.url === '/'){
      return false;
    }
    try {
      const mockUrl = path.replace('/v1/api/','').replace(/\//g,'.')
      const data = require(`./mockData/${method.toLowerCase()}.${mockUrl}`)
      res.send({
        status:200,
        message:'成功',
        data:typeof data === 'function' ? data(query): data
      }) 
    } catch (error) {
      res.send({
        status:500,
        message:'请求失败',
        error
      })
    }
  }
});
/**
 * 监听8090端口
 */
console.clear()
portfinder.basePort = port
portfinder.getPort((err, port) => {
  if (err) {
    getPort(nextPort(port));
  } else {
    app.listen(port,()=>{
      console.log(`http://${ipconfig()}:${port}`)
    });
  }
})