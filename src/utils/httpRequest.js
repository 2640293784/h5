import Vue from 'vue'
import axios from 'axios'
// 路由
import router from '../router'
import { Notify, Toast } from 'vant'
const { origin } = window.location
const http = axios.create({
  timeout: 1000 * 50,
  withCredentials: true
})
// 请求拦截器
http.interceptors.request.use(config => {
  // 默认json格式
  config.headers['Content-Type'] = config['Content-Type'] || 'application/json; charset=utf-8'
  config.url = process.env.ENV === 'production' ? `${origin}/v1${config.url}` : `${origin}${config.url}`
  config.loading = config.loading !== undefined ? config.loading : true
  config.method = config.method || 'get'
  // 判断是否需要loading
  config.loading && Toast.loading({
    duration: 0
  })
  // 判断是否需要验证登录
  if (config.userId) {
    const userId = Vue.cookie.get('koa.sid')
    if (userId) {
      config.headers = {
        userId: userId
      }
    } else {
      Notify({
        type: 'warning',
        message: '请先登陆',
        duration: 1000
      })
      router.push({ path: '/login' })
    }
  } else {
    delete config.userId
    return config
  }
  return config
}, err => Promise.reject(err))
// 响应拦截器
http.interceptors.response.use(response => {
  Toast.clear()
  const { status, data } = response || {}
  switch (status) {
    case 200:
      if (data.errno === 0) {
        return data
      } else {
        Notify({
          type: 'warning',
          message: data.message
        })
      }
      break
    case 401:
      router.push({ path: '/login' })
      break
    case 404:
      Notify({
        type: 'danger',
        message: '请求接口不存在',
        duration: 500
      })
      break
    default:
      Notify({
        type: 'warning',
        message: data.message,
        duration: 500
      })
      break
  }
  return data
}, () => {
  Toast.clear()
  Notify({
    type: 'danger',
    message: '请求错误',
    duration: 500
  })
})
export default http
