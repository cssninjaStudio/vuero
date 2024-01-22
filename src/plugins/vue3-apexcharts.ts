import { definePlugin } from '/@src/app'

export default definePlugin(({ app }) => {
  // register vue3-apexcharts with async component
  const ApexChart = defineAsyncComponent({
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
