import Vue from 'vue'
import axios from 'axios'
//路由
import router from '../router'
import { Toast, Indicator } from 'vant'
import qs from 'qs'
axios.default.timeout = 3000;
//请求拦截器
axios.interceptors.request.use(config => {
  //默认json格式
  config.headers['Content-Type'] = config['Content-Type'] || 'application/json'
  config.loading = config.loading || false
  //判断是否需要loading
  config.loading && Indicator.open();
  if (config.userId === false)
  {
    delete config.userId;
    return config;
  }
  // let userId = Vue.cookie.get('userId');
  // if (userId)
  // {
  //   config.headers = {
  //     "userId": userId
  //   }
  // } else
  // {
  //   Toast('请先登陆')
  //   router.push({ path: '/login' });
  // }
  if (config.method == 'post')
  {
    config.data = qs.stringify(config.data);
  }
  return config;
}, err => Promise.reject(err))
// 响应拦截器
axios.interceptors.response.use(response => {
  const { status } = response
  Indicator.close();
  if (status === 200)
  {
    return response;
  } else
  {
    console.log(response)
    Toast('请求失败!')
  }
}, error => {
  Indicator.close();
  Toast(error);
  return error;
})
export default axios;