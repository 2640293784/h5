import Vue from 'vue'
import Vant, { Lazyload } from 'vant' // https://mint-ui.github.io/#!/zh-cn
// import VueCookie from 'vue-cookie'            // api: https://github.com/alfhen/vue-cookie
// 路由
import router from './router'
import components from './components'
import global from './global'
import App from '@/App'
import '@assets/less'
import '@assets/less/theme'
Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(components)
Vue.use(global)
// Vue.use(VueCookie)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
