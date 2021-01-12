/**
 * ActivePanelState Composition API
 */

import type { Ref } from 'vue'
import { useStorage } from '@vueuse/core'

/* ActivePanelState data */
export const activePanel = useStorage('active-panel', 'none') as Ref<
  'none' | 'search' | 'languages' | 'activity' | 'task'
>
