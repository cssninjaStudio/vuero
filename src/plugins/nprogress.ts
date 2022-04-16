import { definePlugin } from '/@src/app'
import * as NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export default definePlugin(({ router }) => {
  if (import.meta.env.SSR) {
    return
  }

  NProgress.configure({ showSpinner: false })
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
})
