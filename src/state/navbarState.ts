/**
 * navbarState Composition API
 */

import { ref, watchEffect } from 'vue'
import { isMediumScreen } from '/@src/state/responsiveState'

type Subnav =
  | 'closed'
  | 'home'
  | 'layout'
  | 'elements'
  | 'components'
  | 'search'

/* navbarState data */
export const activeSubnav = ref<Subnav>('closed')

export function toggleSubnav(subnav: Subnav) {
  if (activeSubnav.value === subnav) {
    activeSubnav.value = 'closed'
  } else {
    activeSubnav.value = subnav
  }
}

watchEffect(() => {
  if (!isMediumScreen.value) {
    activeSubnav.value = 'closed'
  }
})
