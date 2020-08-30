import Vue from 'vue'
import router from '@/router'
/**
 * 清除登录信息
 */
export function clearLoginInfo () {
  Vue.cookie.delete('userToken')
  Vue.cookie.delete('userId')
  sessionStorage.removeItem('dynamicMenuRoutes')
  sessionStorage.removeItem('btnPermissions')
  router.options.isAddDynamicMenuRoutes = false
}