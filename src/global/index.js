import { isObj } from '@utils'
export default {
  install (Vue) {
    const _prototype = Vue.prototype
    //弹窗
    _prototype.$alert = function (options) {
      options = isObj(options) ? options : {
        message: options,
      }
      _prototype.$dialog.alert(options)
    },
    //确认框
    _prototype.$confirm = function (options,fn) {
      options = isObj(options) ? options : {
        message: options,
      }
       _prototype.$dialog.confirm(options).then(res=>{
        fn(true)
      }).catch(()=>{
        fn(false)
      })
    }
  }
}