/**
 * 全站路由配置
 *
 * 建议:
 * 1. 代码中路由统一使用name属性跳转(不使用path属性)
 */
import Vue from 'vue'
import Router from 'vue-router'
import routers from './routers'
// import { clearLoginInfo } from '@/utils'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: routers
})
router.beforeEach((to, from, next) => {
  const token = Vue.cookie.get('koa.sid')
  if (!to.name) {
    next({ name: '404' })
  }
  if (!token && to.meta.isLogin) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
