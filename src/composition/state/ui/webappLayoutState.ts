import { computed, ref } from 'vue'
import WebappLayout from '/@src/layouts/WebappLayout.vue'
import WebappV2Layout from '/@src/layouts/WebappV2Layout.vue'
import WebappV3Layout from '/@src/layouts/WebappV3Layout.vue'
import WebappV4Layout from '/@src/layouts/WebappV4Layout.vue'
import WebappV5Layout from '/@src/layouts/WebappV5Layout.vue'

const layoutsComponents = {
  'webapp-v1': WebappLayout,
  'webapp-v2': WebappV2Layout,
  'webapp-v3': WebappV3Layout,
  'webapp-v4': WebappV4Layout,
  'webapp-v5': WebappV5Layout,
}

export const webappLayoutId = ref<keyof typeof layoutsComponents>('webapp-v1')
export const webappLayout = computed(() => {
  return layoutsComponents[webappLayoutId.value]
})

export function setLayout(layoutId: keyof typeof layoutsComponents) {
  if (layoutsComponents[layoutId]) {
    webappLayoutId.value = layoutId
  }
}
