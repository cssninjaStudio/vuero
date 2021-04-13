/**
 * This is a store that hold subnav state on navbar layouts
 * It could be one of the SubnavId
 *
 * We can import and set activeSubnav (or use toggleSubnav) anywhere in our project
 * @see /src/components/navigation/desktop/navbar/Navbar.vue
 * @see /src/components/navigation/desktop/navbar/menus/DashboardsWebappMenu.vue
 */

import { ref, watchEffect } from 'vue'
import { isMediumScreen } from '/@src/state/responsiveState'

type SubnavId =
  | 'closed'
  | 'home'
  | 'layout'
  | 'elements'
  | 'components'
  | 'search'

/* navbarState data */
export const activeSubnav = ref<SubnavId>('closed')

export function toggleSubnav(subnav: SubnavId) {
  if (activeSubnav.value === subnav) {
    activeSubnav.value = 'closed'
  } else {
    activeSubnav.value = subnav
  }
}

/**
 * watchEffect callbacks will be executed each time used reactives value has changed
 */
watchEffect(() => {
  if (!isMediumScreen.value) {
    activeSubnav.value = 'closed'
  }
})
