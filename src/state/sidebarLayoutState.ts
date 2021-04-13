/**
 * This is a store that hold which layout component is used on /sidebar subpages
 *
 * Using defineAsyncComponent from vue allow to lazyload component only when they are used
 *
 * We can import and use sidebarLayout anywhere in our project
 * @see /src/components/navigation/desktop/sidebar/menu-items/SidebarItemLayoutSwitcher.vue
 * @see /src/pages/sidebar/dashboards.vue
 * @see /src/pages/sidebar/layouts.vue
 */

import { computed, ref, defineAsyncComponent } from 'vue'

const SidebarLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarLayout.vue')
)
const SidebarCurvedLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarCurvedLayout.vue')
)
const SidebarColorLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarColorLayout.vue')
)
const SidebarColorCurvedLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarColorCurvedLayout.vue')
)
const SidebarLabelsLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarLabelsLayout.vue')
)
const SidebarLabelsHoverLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarLabelsHoverLayout.vue')
)
const SidebarFloatLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarFloatLayout.vue')
)

const layoutsComponents = {
  'sidebar-default': SidebarLayout,
  'sidebar-curved': SidebarCurvedLayout,
  'sidebar-color': SidebarColorLayout,
  'sidebar-color-curved': SidebarColorCurvedLayout,
  'sidebar-labels': SidebarLabelsLayout,
  'sidebar-labels-hover': SidebarLabelsHoverLayout,
  'sidebar-float': SidebarFloatLayout,
}

export const sidebarLayoutId = ref<keyof typeof layoutsComponents>(
  'sidebar-default'
)
export const sidebarLayout = computed(() => {
  return layoutsComponents[sidebarLayoutId.value] || SidebarLayout
})

export function setLayout(layoutId: keyof typeof layoutsComponents) {
  if (layoutsComponents[layoutId]) {
    sidebarLayoutId.value = layoutId
  }
}
