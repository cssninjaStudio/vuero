/**
 * ActiveSidebarState Composition API
 */

import { Ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'

type Sidebar =
  | 'none'
  | 'messages'
  | 'layouts'
  | 'home'
  | 'components'
  | 'elements'

/* ActiveSidebarState data */
export const activeSidebar = useStorage(
  'active-sidebar',
  'none'
) as Ref<Sidebar>

export function toggleSidebar(sidebar: Sidebar) {
  if (activeSidebar.value === sidebar) {
    activeSidebar.value = 'none'
  } else {
    activeSidebar.value = sidebar
  }
}

export default function init() {
  console.log('init active sidebar')
  watch(
    activeSidebar,
    () => {
      const wrappers = document.querySelectorAll('.view-wrapper')
      console.log('watch wrappers', wrappers)

      wrappers.forEach((wrapper) => {
        console.log('wrapper', wrapper)
        if (activeSidebar.value === 'none') {
          wrapper.classList.remove('is-pushed-full')
        } else if (!wrapper.classList.contains('is-pushed-full')) {
          wrapper.classList.add('is-pushed-full')
        }
      })
    },
    {
      immediate: true,
    }
  )
}
