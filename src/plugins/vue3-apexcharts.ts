import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(({ app }) => {
  // register vue3-apexcharts with async component
  const ApexChart = defineAsyncComponent({
    // @ts-expect-error - modules does not have exports field (required by moduleResolution = bundler)
    loader: () => import('vue3-apexcharts'),
    suspensible: false,
  })

  if (import.meta.env.SSR) {
    app.component('ApexChart', defineComponent({
      name: 'ApexChart',
      setup() {
        return () => h('div')
      },
    }))
  }
  else {
    app.component('ApexChart', ApexChart)
  }
})
