export const route = {
  path: '/',
  component: require('@/components/LandingPage'),
  children: []
}
export const routes = [{
  path: '*',
  component: require('@/components/LandingPage')
}]
