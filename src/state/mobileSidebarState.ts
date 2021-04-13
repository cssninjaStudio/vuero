/**
 * This is a store that hold right panel state on mobile sidebar layouts
 * It could be open or closed, the displayed sidebar is used from activeSidebarState
 *
 * We can import and set isMobileSidebarOpen anywhere in our project
 * @see /src/components/navigation/mobile/navbar/MobileNavbar.vue
 * @see /src/components/navigation/mobile/sidebar/MobileSidebarMain.vue
 * @see /src/pages/sidebar-blank-page-1.vue
 */

import { ref, watchEffect } from 'vue'
import { isMediumScreen } from '/@src/state/responsiveState'

export const isMobileSidebarOpen = ref(false)

/**
 * watchEffect callbacks will be executed each time used reactives value has changed
 */
watchEffect(() => {
  if (isMediumScreen.value) {
    isMobileSidebarOpen.value = false
  }
})
