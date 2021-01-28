import type { App } from 'vue'
import installRouter from './router'
import installI18n from './i18n'
import installApexCharts from './apexcharts'
import installMultiselect from './multiselect'
import installDirectives from '/@src/directives'
import '@purge-icons/generated'
import './icons'
import './simplebar'
import './tinyslider'
import './notyf'
import './scss'

export default (app: App) => {
  installRouter(app)
  installI18n(app)
  installApexCharts(app)
  installMultiselect(app)
  installDirectives(app)
}
