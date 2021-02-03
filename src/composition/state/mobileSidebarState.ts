/**
 * MobileSidebarState Composition API
 */

import { useMediaQuery } from '@vueuse/core'
import { ref, watch } from 'vue'

/* MobileSidebarState data */
const isLargeScreen = useMediaQuery('(min-width: 767px)')

export const isMobileSidebarOpen = ref(false)

watch(
  isLargeScreen,
  () => {
    if (isLargeScreen.value) {
      isMobileSidebarOpen.value = false
    }
  },
  { immediate: true }
)
