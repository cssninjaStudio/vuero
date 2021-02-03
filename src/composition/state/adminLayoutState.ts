import { computed, ref, defineAsyncComponent } from 'vue'
import DefaultLayout from '/@src/layouts/DefaultLayout.vue'

const SidebarCurvedLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarCurvedLayout.vue')
)
const SidebarColorLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarColorLayout.vue')
)
const SidebarColorCurvedLayout = defineAsyncComponent(
  () => import('/@src/layouts/SidebarColorCurvedLayout.vue')
)

const layoutsComponents = {
  'sidebar-default': DefaultLayout,
  'sidebar-curved': SidebarCurvedLayout,
  'sidebar-color': SidebarColorLayout,
  'sidebar-color-curved': SidebarColorCurvedLayout,
}

export const adminLayoutId = ref<keyof typeof layoutsComponents>(
  'sidebar-default'
)
export const adminLayout = computed(() => {
  return layoutsComponents[adminLayoutId.value] || DefaultLayout
})

export function setLayout(layoutId: keyof typeof layoutsComponents) {
  if (layoutsComponents[layoutId]) {
    adminLayoutId.value = layoutId
  }
}
