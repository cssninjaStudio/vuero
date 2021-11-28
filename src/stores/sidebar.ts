/**
 * This is a store that hold right panel state on sidebar layouts
 * It could be one of the SidebarId
 *
 * We can import and set activeSidebar (or use toggleSidebar) anywhere in our project
 * @see /src/components/navigation/desktop/sidebar/SidebarColorCurved.vue
 * @see /src/pages/sidebar-blank-page-1.vue
 */

import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export type SidebarId =
  | 'none'
  | 'messages'
  | 'layouts'
  | 'home'
  | 'components'
  | 'elements'

export const useSidebar = defineStore('sidebar', () => {
  const active = ref<SidebarId>('none')

  function toggle(sidebarId: SidebarId) {
    if (active.value === sidebarId) {
      active.value = 'none'
    } else {
      active.value = sidebarId
    }
  }
  function setActive(sidebarId: SidebarId) {
    active.value = sidebarId
  }

  function close() {
    active.value = 'none'
  }

  return {
    active,
    toggle,
    setActive,
    close,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSidebar, import.meta.hot))
}
