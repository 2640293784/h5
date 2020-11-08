// 引入 Mock
var Mock = require('mockjs')
var data = Mock.mock({
  "data|10": [{
    // 商品种类
    "name": "@ctitle(8,50)",
    // 商品Id
    "id|+1": 1,
    "grade|6-10.1": 10,
    //商品图片
    "img_url": "@Image('170x235','@color','@cname')",
  }]
})
module.exports = data