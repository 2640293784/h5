import axios from '../utils/httpRequest'
//用户
export const userInfo = data => axios({
  method: 'get',
  url: "/api/user/getUserInfo",
  data: data || {}
})
//用户注册
export const userRegister = data => axios({
  method: "post",
  url: "/api/user/signUp",
  data: data || {},
  userId: false
})
//用户登录
export const userLogin = data => axios({
  method: "post",
  url: "/api/user/signOut",
  data: data || {},
  userId: false
})
//找回密码
export const password = data => axios({
  method: "post",
  url: "/api/user/password",
  data: data || {},
  userId: false
})
//首页
export const movieSwiper = data => axios({
  method: 'get',
  url: "/api/index/index.php",
  data: data || {}
})
export const list = data => axios({
  method: 'get',
  url: "/api/index/index_1.php",
  data: data || {}
})
export const swiper = data => axios({
  method: 'get',
  url: "/api/index/swiper.php",
  data: data || {}
})

//分类
export const classify = data => axios({
  method: 'get',
  url: '/api/goods/getClassify',
  data: data || {}
})
export const classList = data => axios({
  method: "post",
  url: "/api/goods/getGoods",
  data: data || {},
  loading: false
})
//详情
export const classDeails = data => axios({
  method: "get",
  url: "/api/goods/getGoodDetails",
  params: data || {}
})
//购物车shopping
export const shopping = '/app/api/shopping/shopping.php';//获取
export const addShopping = '/app/api/shopping/shopping_2.php';//新增
export const deleteShopping = '/app/api/shopping/delete.php';//删除
//图片上传
export const uploadFile = data => axios({
  method: 'post',
  url: 'api/upload',
  data: data || {},
  'Content-Type': 'multipart/form-data',
})
//修改用户资料
export const updateUser = data => axios({
  method: 'post',
  url: "api/user/updateUser",
  data: data || {}
})
//积分中心
export const integSwiper = data => axios({
  method: "get",
  url: "/api/integ/swiper.php",
  data: data || {}
})
export const integList = data => axios({
  method: "get",
  url: "/api/integ/recommend.php",
  data: data || {}
})
//个人中心
