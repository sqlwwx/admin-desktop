import { route } from '@/setup/router/routes'

export const initRouter = () => {
  route.components = {
    default: (resolve) => {
      require(['./components/layout/index.vue'], resolve)
    }
  }
}
