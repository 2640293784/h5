const fmoney = function (value, n = 0) {
  if (!value) {
    return value
  }
  value = parseFloat(value).toFixed(n)
  const [int, float = ''] = value.toString().split('.')
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  const newVal = `${int.replace(reg, '$&,')}`
  return n === 0 ? newVal : `${newVal}.${float}`
}
export default {
  install (Vue) {
    Vue.filter('fmoney', fmoney)
  }
}
