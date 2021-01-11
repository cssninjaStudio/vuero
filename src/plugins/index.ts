import type { ViteSSGContext } from 'vite-ssg'
import installNprogress from './nprogress'
import installToast from './toast'
import './icons'

export default (context: ViteSSGContext) => {
  if (context.isClient) {
    installToast(context)
    installNprogress(context)
  }
}
