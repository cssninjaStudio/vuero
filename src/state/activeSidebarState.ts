/**
 * ActiveSidebarState Composition API
 */

import { ref, watchEffect } from 'vue'

type Sidebar =
  | 'none'
  | 'messages'
  | 'layouts'
  | 'home'
  | 'components'
  | 'elements'

/* ActiveSidebarState data */
export const activeSidebar = ref<Sidebar>('none')

export function toggleSidebar(sidebar: Sidebar) {
  if (activeSidebar.value === sidebar) {
    activeSidebar.value = 'none'
  } else {
    activeSidebar.value = sidebar
  }
}

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
