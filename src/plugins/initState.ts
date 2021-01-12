import type { ViteSSGContext } from 'vite-ssg'
import initDarkModeState from '/@src/composition/state/ui/darkModeState'
import initSidebarState from '/@src/composition/state/ui/activeSidebarState'

export default ({ isClient }: ViteSSGContext) => {
  if (isClient) {
    initDarkModeState()
    initSidebarState()
  }
}
