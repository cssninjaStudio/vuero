import type { ViteSSGContext } from 'vite-ssg'
// import initDarkModeState from '/@src/composition/state/ui/darkModeState'
// import initSidebarState from '/@src/composition/state/ui/activeSidebarState'
// import initMobileSidebarState from '/@src/composition/state/ui/mobileSidebarState'
// import initWebappNavState from '/@src/composition/state/ui/webappNavState'

export default ({ isClient }: ViteSSGContext) => {
  if (isClient) {
    // initDarkModeState()
    // initSidebarState()
    // initMobileSidebarState()
    // initWebappNavState()
  }
}
