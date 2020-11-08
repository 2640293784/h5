// 引入 Mock
const Mock = require('mockjs')
const typeList = require('./get.product.getTypeList')
const data = (query) =>{
  const { typeId, page, pageSize } = query;
  const typeName = typeList.find(item => item.id == typeId)
  if(page == 3){
    return []
  }else{
    return Mock.mock({
      'data|18' : [{
        // 商品种类
        "text": "@ctitle(8,50)",
        // 商品Id
        "id|+1": 1,
        //商品图片
        "url": `@Image('102x102', '@color', '${typeName ? typeName.name: '无'}')`,
      }]
    })
  }
}
module.exports = data