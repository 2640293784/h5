import axios from '../utils/httpRequest'
//用户
export const userInfo = data => axios({
  method: 'get',
  url: "/api/user/getIntergral",
  data: data || {}
})
//用户充值
export const userRecharge = data => axios({
  method: "post",
  url: "/api/user/rechargeIntergral",
  data: data || {}
})
//用户注册
export const userRegister = data => axios({
  method: "post",
  url: "/api/user/signUp",
  data: data || {}
})
//用户登录
export const userLogin = data => axios({
  method: "post",
  url: "/api/user/signIn",
  data: data || {}
})
//找回密码
export const password = data => axios({
  method: "post",
  url: "/api/user/password",
  data: data || {}
})
//首页
export const homeCarousel = data => axios({
  method: 'get',
  url: "/api/home/carouser",
  loading:false,
  data: data || {}
})
//首页电影列表
export const getMovieList = data => axios({
  method: 'get',
  url: "/api/product/getMovieList",
  loading:false,
  data: data || {}
})
//首页生日列表
export const getBirthList = data => axios({
  method: 'get',
  url: "/api/product/getBirthList",
  loading:false,
  data: data || {}
})
export const getFruitList = data => axios({
  method: 'get',
  url: "/api/product/getFruitList",
  data: data || {}
})
export const classList = data => axios({
  method: "post",
  url: "/api/goods/getGoods",
  data: data || {},
  loading: false
})
//分类
export const classify = data => axios({
  method: 'get',
  url: '/api/goods/getClassify',
  data: data || {}
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
//获取收货地址
export const getAddress = data => axios({
  method: 'get',
  url: "/api/user/getAdress",
  data: data || {}
})
//添加收货地址
export const addAddress = data => axios({
  method: 'post',
  url: "/api/user/addAdress",
  data: data || {}
})
//修改收货地址
export const updateAdress = data => axios({
  method: 'post',
  url: "/api/user/updateAdress",
  data: data || {}
})
//删除收货地址
export const deleteAddress = data => axios({
  method: 'post',
  url: "/api/user/delAdress",
  data: data || {}
})
//删除收货地址
export const checkoutAdress = data => axios({
  method: 'post',
  url: "/api/user/checkoutAdress",
  data: data || {}
})