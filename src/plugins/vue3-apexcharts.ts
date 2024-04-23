import { definePlugin } from '/@src/utils/plugins'
import ClientOnly from '/@src/components/ClientOnly.vue'

export default definePlugin(({ app }) => {
  const ApexChart = defineAsyncComponent({
    // @ts-expect-error - modules does not have exports field (required by moduleResolution = bundler)
    loader: () => import('vue3-apexcharts'),
    suspensible: false,
  })

  app.component('ApexChart', defineComponent({
    name: 'ApexChart',
    inheritAttrs: false,
    setup(_, { attrs }) {
      return () => h(ClientOnly, () => h(ApexChart, attrs))
    },
  }))
})
