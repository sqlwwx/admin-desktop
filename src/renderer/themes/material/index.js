const files = require.context('.', true, /^.\/apps\/(\w+)\/index\.js$/)

export const localApps = files.keys()

export const init = () => {
  return Promise.resolve()
}
