import type { App } from 'vue'
// import routes from 'vite-plugin-pages/client'
import routes from 'voie-pages'
import { createHead } from '@vueuse/head'
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

console.log('routes?', routes)

export default (app: App) => {
  const head = createHead()
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })

  app.use(router)
  app.use(head)
}
