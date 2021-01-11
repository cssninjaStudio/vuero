import type { ViteSSGContext } from 'vite-ssg'
import NProgress from 'nprogress'

export default ({ router }: ViteSSGContext) => {
  router.beforeEach(() => {
    NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
