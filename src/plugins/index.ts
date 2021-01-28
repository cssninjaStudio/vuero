import type { App } from 'vue'
import installRouter from './router'
import installToast from './toast'
import installI18n from './i18n'
import installApexCharts from './apexcharts'
import installDirectives from '/@src/directives'
import '@purge-icons/generated'
import './icons'
import './multiselect'
import './simplebar'
import './tinyslider'
import './notyf'
import './scss'

export default (app: App) => {
  installToast(app)
  installRouter(app)
  installI18n(app)
  installApexCharts(app)
  installDirectives(app)
}
