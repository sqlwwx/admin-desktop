import { initRouter } from './router'

const files = require.context('.', true, /^.\/apps\/(\w+)\/index\.js$/)

export const localApps = files.keys()

export const init = () => {
  initRouter()
  return Promise.resolve()
}
