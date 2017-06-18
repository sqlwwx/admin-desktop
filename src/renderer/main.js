import Vue from 'vue'
import lstore from 'vue-wwx/exts/store'
import { PromiseMap, noop } from 'vue-wwx/exts/promise'
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
}).then((runningApps) => {
  debug('runningApps', runningApps)
  return PromiseMap(runningApps, (appName) => {
    if (localApps.indexOf(`./apps/${appName}/index.js`) === -1) {
      debug(`unsupport app [${appName}]`)
      return Promise.resolve()
    } else {
      let { init } = require(`./themes/material/apps/${appName}/index.js`)
      return (init || noop)(App)
    }
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
