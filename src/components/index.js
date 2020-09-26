import GFooterNav from './g-footer-nav'
import GTitle from './g-title'
import GSwiper from './g-swiper'
import GPullRefresh from './g-pull-refresh'
export default {
  install (Vue) {
    Vue.component('g-swiper', GSwiper)
    Vue.component('g-footer-nav', GFooterNav)
    Vue.component('g-pull-refresh', GPullRefresh)
    Vue.component('g-title', GTitle)
  }
}