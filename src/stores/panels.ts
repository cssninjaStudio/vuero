/**
 * This is a store that hold left panel state
 * It could be one of the ActivePanelId
 *
 * Using useStorage from @vueuse/core allow persistance storage accross tabs/sessions
 *
 * We can import and set activePanel anywhere in our project
 * @see /src/components/partials/toolbars/Toolbar.vue
 * @see /src/components/partials/panels/ActivityPanel.vue
 */

import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export type ActivePanelId = 'none' | 'search' | 'languages' | 'activity' | 'task'

export const usePanels = defineStore('panels', () => {
  const active = useStorage<ActivePanelId>('active-panel', 'none')

  function setActive(panelId: ActivePanelId) {
    active.value = panelId
  }

  function close() {
    active.value = 'none'
  }

  return {
    active,
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
  import.meta.hot.accept(acceptHMRUpdate(usePanels, import.meta.hot))
}
