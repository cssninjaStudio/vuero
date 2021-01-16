import type { ViteSSGContext } from 'vite-ssg'
import installNprogress from './nprogress'
import installToast from './toast'
import installI18n from './i18n'
import installApexCharts from './apexcharts'
import installDirectives from '/@src/directives'
import './icons'
import './simplebar'
import './scss'

export default (context: ViteSSGContext) => {
  installToast(context)
  installNprogress(context)
  installI18n(context)
  installApexCharts(context)

  installDirectives(context)
}
