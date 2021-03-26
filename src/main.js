import Vue from 'vue'
import './assets/css/styles.css'
import store from './store/store'
import router from './router/routes'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
