import Vue from 'vue'
import Router from 'vue-router'
import { route, routes } from './routes'
import store from '../store'

Vue.use(Router)

export var router

export default () => {
  router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [ route ].concat(routes),
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}
        if (to.hash) {
          position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
          position.x = 0
          position.y = 0
        }
        return position
      }
    }
  })
  router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      if (store.state.auth.token) {
        next()
      } else {
        return router.push({ path: '/login' })
      }
    } else {
      next()
    }
  })
  return router
}
