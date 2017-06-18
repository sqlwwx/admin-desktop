import Vue from 'vue'
import { init, setup } from './setup/index.js'
import { init as initTheme, localApps } from '@/themes/material'

import App from './App'

const debug = require('debug')('ws-admin-desktop:main')
init().then(() => {
  debug('localApps', localApps)
  return initTheme()
}).then(() => {
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
