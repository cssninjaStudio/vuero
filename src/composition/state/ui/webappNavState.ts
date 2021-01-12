/**
 * WebAppNavState Composition API
 */

import { useMediaQuery } from '@vueuse/core'
import { ref, watch } from 'vue'

type Subnav =
  | 'closed'
  | 'home'
  | 'layout'
  | 'elements'
  | 'components'
  | 'search'

/* WebAppNavState data */
// const route = useRoute()
const isLargeScreen = useMediaQuery('(min-width: 767px)')
export const activeSubnav = ref<Subnav>('closed')

export function toggleSubnav(subnav: Subnav) {
  if (activeSubnav.value === subnav) {
    activeSubnav.value = 'closed'
  } else {
    activeSubnav.value = subnav
  }
}

watch(isLargeScreen, () => {
  if (!isLargeScreen.value) {
    activeSubnav.value = 'closed'
  }
})
