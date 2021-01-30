import { createRouter, createWebHistory } from 'vue-router'
import * as NProgress from 'nprogress'
import routes from 'voie-pages'

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

export default router
