/**
 * 全站路由配置
 *
 * 建议:
 * 1. 代码中路由统一使用name属性跳转(不使用path属性)
 */
import Vue from 'vue'
import Router from 'vue-router'
import http from '@/utils/httpRequest'
import routers from './routers'
// import { clearLoginInfo } from '@/utils'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: routers
})
router.beforeEach((to, from, next) => {
  let token = Vue.cookie.get('userToken')
  const userToken = ['login', 'register', 'password']
  if (userToken.indexOf(to.name) !== -1)
  {
    next();
    return;
  }
  if (!token || !/\S/.test(token))
  {
    next({ name: 'login' })
  } else
  {
    next()
  }
})
export default router
