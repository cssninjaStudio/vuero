/**
 * This is a store that hold right panel state on sidebar layouts
 * It could be one of the SidebarId
 *
 * We can import and set activeSidebar (or use toggleSidebar) anywhere in our project
 * @see /src/components/navigation/desktop/sidebar/SidebarColorCurved.vue
 * @see /src/pages/sidebar-blank-page-1.vue
 */

import { ref, watchEffect } from 'vue'

type SidebarId =
  | 'none'
  | 'messages'
  | 'layouts'
  | 'home'
  | 'components'
  | 'elements'

export const activeSidebar = ref<SidebarId>('none')

export function toggleSidebar(sidebar: SidebarId) {
  if (activeSidebar.value === sidebar) {
    activeSidebar.value = 'none'
  } else {
    activeSidebar.value = sidebar
  }
}
