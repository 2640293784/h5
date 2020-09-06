import GFooterNav from './g-footer-nav'
import GSwiper from './g-swiper'
export default {
  install (Vue) {
    Vue.component('g-swiper', GSwiper)
    Vue.component('g-footer-nav', GFooterNav)
  }
}