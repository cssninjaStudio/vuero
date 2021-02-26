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
const WebappV6Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV6Layout.vue')
)
const WebappV7Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV7Layout.vue')
)
const WebappV8Layout = defineAsyncComponent(
  () => import('/@src/layouts/WebappV8Layout.vue')
)

const layoutsComponents = {
  'webapp-v1': WebappLayout,
  'webapp-v2': WebappV2Layout,
  'webapp-v3': WebappV3Layout,
  'webapp-v4': WebappV4Layout,
  'webapp-v5': WebappV5Layout,
  'webapp-v6': WebappV6Layout,
  'webapp-v7': WebappV7Layout,
  'webapp-v8': WebappV8Layout,
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
