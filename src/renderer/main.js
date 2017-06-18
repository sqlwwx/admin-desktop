import Vue from 'vue'
import { init, setup } from './setup/index.js'

import App from './App'

const debug = require('debug')('ws-admin-desktop:main')
init().then(() => {
  return setup()
}).then(({ router, store }) => {
  let AppView = Vue.extend(App)
  debug('startApp')
  /* eslint-disable no-new */
  new AppView({
    router,
    store
  }).$mount('#app')
})
