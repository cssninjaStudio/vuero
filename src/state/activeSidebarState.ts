/**
 * This is a store that hold right panel state on sidebar layouts
 * It could be one of the SidebarId
 *
 * We can import and set activeSidebar (or use toggleSidebar) anywhere in our project
 * @see /src/components/navigation/desktop/sidebar/subsidebars/GenericSidebar.vue
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

/**
 * watchEffect callbacks will be executed each time used reactives value has changed
 */
watchEffect(() => {
  const wrappers = document.querySelectorAll('.view-wrapper')

  wrappers.forEach((wrapper) => {
    if (activeSidebar.value === 'none') {
      wrapper.classList.remove('is-pushed-full')
    } else if (!wrapper.classList.contains('is-pushed-full')) {
      wrapper.classList.add('is-pushed-full')
    }
  })
})
