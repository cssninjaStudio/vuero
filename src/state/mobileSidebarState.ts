/**
 * MobileSidebarState Composition API
 */

import { ref, watchEffect } from 'vue'
import { isMediumScreen } from '/@src/state/responsiveState'

/* MobileSidebarState data */

export const isMobileSidebarOpen = ref(false)

watchEffect(() => {
  if (isMediumScreen.value) {
    isMobileSidebarOpen.value = false
  }
})
