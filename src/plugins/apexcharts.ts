import type { ViteSSGContext } from 'vite-ssg'
import type { App } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default (app: App) => {
  app.use(VueApexCharts)
}
