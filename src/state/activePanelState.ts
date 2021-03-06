/**
 * ActivePanelState Composition API
 */

import type { Ref } from 'vue'
import { useStorage } from '@vueuse/core'

/* ActivePanelState data */
type ActivePanelId = 'none' | 'search' | 'languages' | 'activity' | 'task'

export const activePanel = useStorage(
  'active-panel',
  'none'
) as Ref<ActivePanelId>
