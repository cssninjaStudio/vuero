/**
 * This is a store that hold which layout component is used on /sidebar subpages
 *
 * Using defineAsyncComponent from vue allow to lazyload component only when they are used
 *
 * We can import and use sidebarLayout anywhere in our project
 * @see /src/components/navigation/desktop/sidebar/menu-items/SidebarLayoutSwitcher.vue
 * @see /src/pages/sidebar/dashboards.vue
 * @see /src/pages/sidebar/layouts.vue
 */

import { ref } from 'vue'

export type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

export const sidebarTheme = ref<SidebarTheme>('default')
export const pageTitle = ref('Welcome')
