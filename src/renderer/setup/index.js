import Vue from 'vue'
import './api'
import Router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

export const init = () => {
  return Promise.resolve()
}

export const setup = () => {
  let router = Router()
  return Promise.resolve({
    store, router
  })
}
