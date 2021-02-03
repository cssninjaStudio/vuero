import { computed, ref, defineAsyncComponent } from 'vue'
import WebappLayout from '/@src/layouts/WebappLayout.vue'

const WebappV2Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV2Layout.vue')
)
const WebappV3Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV3Layout.vue')
)
const WebappV4Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV4Layout.vue')
)
const WebappV5Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV5Layout.vue')
)

const layoutsComponents = {
  'webapp-v1': WebappLayout,
  'webapp-v2': WebappV2Layout,
  'webapp-v3': WebappV3Layout,
  'webapp-v4': WebappV4Layout,
  'webapp-v5': WebappV5Layout,
}

export const webappLayoutId = ref<keyof typeof layoutsComponents>('webapp-v1')
export const webappLayout = computed(() => {
  return layoutsComponents[webappLayoutId.value] || WebappLayout
})

export function setLayout(layoutId: keyof typeof layoutsComponents) {
  if (layoutsComponents[layoutId]) {
    webappLayoutId.value = layoutId
  }
}
