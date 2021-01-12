/**
 * MobileSidebarState Composition API
 */

import { useMediaQuery } from '@vueuse/core'
// import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

/* MobileSidebarState data */
// const route = useRoute()
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
