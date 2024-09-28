import { hydrateOnVisible } from 'vue'
import { definePlugin } from '/@src/utils/plugins'
import ClientOnly from '/@src/components/ClientOnly.vue'

export default definePlugin(({ app }) => {
  const ApexChart = defineAsyncComponent({
    loader: () => import('vue3-apexcharts'),
    suspensible: false,
    hydrate: hydrateOnVisible(),
  })

  app.component('ApexChart', defineComponent({
    name: 'ApexChart',
    inheritAttrs: false,
    setup(_, { attrs }) {
      return () => h(ClientOnly, () => h(ApexChart, attrs))
    },
  }))
})
