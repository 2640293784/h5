import GFooterNav from './g-footer-nav'
import GTitle from './g-title'
import GPageTitle from './g-page-title'
import GSwiper from './g-swiper'
import GPullRefresh from './g-pull-refresh'
export default {
  install (Vue) {
    Vue.component('g-swiper', GSwiper)
    Vue.component('g-footer-nav', GFooterNav)
    Vue.component('g-pull-refresh', GPullRefresh)
    Vue.component('g-page-title', GPageTitle)
    Vue.component('g-title', GTitle)
  }
}