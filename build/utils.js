  const os = require('os')
  const net = require('net')
  const ipconfig = function() {
    let needHost = ''; // 打开的host
    try {
      // 获得网络接口列表
      let network = os.networkInterfaces();
      for (let dev in network) {
          let iface = network[dev];
          for (let i = 0; i < iface.length; i++) {
              let alias = iface[i];
              if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                  needHost = alias.address;
              }
          }
      }
    } catch (e) {
      needHost = 'localhost';
    }
    return needHost
  }
  const createPort = function (port) {
  const server=net.createServer().listen(port)
  return new Promise((resolve,reject)=>{
      server.on('listening',()=>{
          server.close()
          resolve(port)
      })
      server.on('error',(err)=>{
          if(err.code==='EADDRINUSE'){
              resolve(createPort(port+1))//注意这句，如占用端口号+1
          }else{
              reject(err)
          }
      })
  })
  }
 module.exports={
  ipconfig,
  createPort
 }