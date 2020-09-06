import Vue from 'vue'
import router from '@/router'
const _is = Object.prototype.toString
/**
 * 字符串
 */
export function isString(o) {
  return _is(o) === '[object String]'
}
/**
 * 数字
 */
export function isNumber(o) {
  return _is(o) === '[object Number]'
}
/**
 * 函数
 */
export function isFun(o) {
  return _is(o) === '[object Function]'
}
/**
 * 数组
 */
export function isArray(o) {
  return _is(o) === '[object Array]'
}
/**
 * 对象
 */
export function isObj(o) {
  return _is(o) === '[object Object]'
}
/**
 * 手机号码
 */
export function isMobile (o) {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(o)
}
/**
 * URL地址
 */
export function isURL (o) {
  return /^http[s]?:\/\/.*/.test(o)
}
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