import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import Multiselect from '@vueform/multiselect'
import VueApexCharts from 'vue3-apexcharts'
import VCalendar from 'v-calendar'
import VueTippy from 'vue-tippy'

import hasChildren from './directives/has-children'
import background from './directives/background'

import 'simplebar'
import '@purge-icons/generated'

import '@vueform/multiselect/themes/default.css'
import 'simplebar/dist/simplebar.css'
import 'tiny-slider/src/tiny-slider.scss'
import 'notyf/notyf.min.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/svg-arrow.css'
import 'tippy.js/dist/border.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/themes/light.css'

import './assets/scss/main.scss'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.use(VueApexCharts)
app.use(VCalendar)
app.use(VueTippy, {
  defaultProps: {
    theme: 'light',
  },
})

app.component(Multiselect.name, Multiselect)

app.directive('has-children', hasChildren)
app.directive('background', background)

app.mount('#app')
