import Vue from 'vue'

// Template files
import style from './assets/css/styles.css'

import store from './store/store'
import router from './router/routes'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
  style
}).$mount('#app')
