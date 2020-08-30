import Vue from 'vue'
import mintUI from 'mint-ui'               //https://mint-ui.github.io/#!/zh-cn
import VueCookie from 'vue-cookie'            // api: https://github.com/alfhen/vue-cookie
// import './components'
//路由
import router from './router'
import App from '@/App'
import '@assets/less'
Vue.use(mintUI)
Vue.prototype.$toast = mintUI.Toast
Vue.prototype.$message = mintUI.MessageBox
Vue.prototype.$alert = mintUI.MessageBox.alert
Vue.prototype.$confirm = mintUI.MessageBox.confirm
Vue.prototype.$prompt = mintUI.MessageBox.prompt
Vue.prototype.$loading = mintUI.Indicator.open
Vue.prototype.$close = mintUI.Indicator.close
Vue.use(VueCookie)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')