import type { ViteSSGContext } from 'vite-ssg'
import NProgress from 'nprogress'

export default ({ router, isClient }: ViteSSGContext) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
