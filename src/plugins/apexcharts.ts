import type { ViteSSGContext } from 'vite-ssg'
import VueApexCharts from 'vue3-apexcharts'

export default ({ app }: ViteSSGContext) => {
  app.use(VueApexCharts)
}
