import Vue from 'vue'
import lstore from 'vue-wwx/exts/store'
import { init, setup } from './setup/index.js'
import { init as initTheme, localApps } from '@/themes/material'

import App from './App'

const debug = require('debug')('ws-admin-desktop:main')
init().then(() => {
  debug('localApps', localApps)
  return initTheme()
}).then(() => {
  return lstore.getWithExpire('appNames', () => {
    return Vue.http.get('Apps/runningApps').then(({data}) => {
      return Promise.resolve(data)
    })
  })
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
