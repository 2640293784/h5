import { isObj } from '@utils'
export default {
  install (Vue) {
    // 弹窗
    Vue.prototype.$alert = function (options) {
      options = isObj(options) ? options : {
        message: options
      }
      Vue.prototype.$dialog.alert(options)
    }
    // 确认框
    Vue.prototype.$confirm = function (options, fn) {
      options = isObj(options) ? options : {
        message: options
      }
      Vue.prototype.$dialog.confirm(options).then(res => {
        fn(true)
      }).catch(() => {
        fn(false)
      })
    }
  }
}
