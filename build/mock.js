const express = require('express');    //引入express模块
const path = require('path')
const portfinder = require('portfinder')
const { ipconfig } = require('./utils')

let app = express();                //实例化express
const port = 8090
app.use(express.static(path.join(__dirname, '../dist')))
/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all('*',function (req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
      res.send(200); /让options请求快速返回/
  }else {
      next();
  }
});
// 设置4秒后再响应
// Mock.setup({ timeout: 4000 });
app.get('*',(req, res)=>{
  if(req.url === '/'){
    return false;
  }
  try {
    const method = req.url.replace('/v1/api/','').replace(/\//g,'.')
    const list = require(`./mockData/${method}`)
    res.send(list) 
  } catch (error) {
    res.send({})
  }
})
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