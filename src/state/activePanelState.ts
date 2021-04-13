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

import { useStorage } from '@vueuse/core'

type ActivePanelId = 'none' | 'search' | 'languages' | 'activity' | 'task'

export const activePanel = useStorage<ActivePanelId>('active-panel', 'none')
