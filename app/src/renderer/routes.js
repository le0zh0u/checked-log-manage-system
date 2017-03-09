export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/import/log',
    name: 'log-import-page',
    component: require('components/LogImportPageView')
  },
  {
    path: '/test',
    name: 'test-page',
    component: require('components/RouterTestPage')
  },
  {
    path: '*',
    redirect: '/'
  }
]
