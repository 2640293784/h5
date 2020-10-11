import { isObj, isFun } from '@utils'
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
      Vue.prototype.$dialog.confirm(options).then(() => {
        isFun(fn) && fn(true)
      }).catch(() => {
        isFun(fn) && fn(false)
      })
    }
    Vue.prototype.$success = function (text, fn) {
      this.$notify({
        type: 'syccess',
        message: text,
        duration: 500,
        onClose: () => {
          isFun(fn) && fn()
        }
      })
    }
    Vue.prototype.$warning = function (text, fn) {
      this.$notify({
        type: 'warning',
        message: text,
        duration: 500,
        onClose: () => {
          isFun(fn) && fn()
        }
      })
    }
    Vue.prototype.$error = function (text, fn) {
      this.$notify({
        type: 'danger',
        message: text,
        duration: 500,
        onClose: () => {
          isFun(fn) && fn()
        }
      })
    }
  }
}
