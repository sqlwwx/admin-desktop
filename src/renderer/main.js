import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

const debug = require('debug')('ws-admin-desktop:main')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
debug('startApp')
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
