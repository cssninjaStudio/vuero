import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { definePlugin } from '/@src/utils/plugins'

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
