import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App'

Vue.use(Buefy)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
