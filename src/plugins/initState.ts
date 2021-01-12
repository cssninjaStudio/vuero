import type { ViteSSGContext } from 'vite-ssg'
import initDarkModeState from '/@src/composition/state/ui/darkModeState'

export default ({ isClient }: ViteSSGContext) => {
  if (isClient) {
    initDarkModeState()
  }
}
