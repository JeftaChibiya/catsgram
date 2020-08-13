import Vue from 'vue'
import App from './App.vue'

import '@/assets/scss/app.scss'

import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
