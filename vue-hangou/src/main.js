// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//config
import config from './modules/config'
Vue.config.productionTip = false
//store
import store from './store'
//swiper
import  '../node_modules/swiper/dist/css/swiper.min.css'
//directives
import './modules/directives'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{config},
  router,
  store,
  components: { App },
  template: '<App/>'
})
