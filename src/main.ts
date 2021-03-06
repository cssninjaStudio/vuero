import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import VCalendar from 'v-calendar'
import VueMultiselect from '@vueform/multiselect'
import VueSlider from '@vueform/slider'
import VueApexCharts from 'vue3-apexcharts'
import VueCKEditor from '@ckeditor/ckeditor5-vue'
import VueTippy from 'vue-tippy'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

import hasNestedRouterLink from './directives/has-nested-router-link'
import background from './directives/background'

import 'simplebar'
import '@purge-icons/generated'
import 'nprogress/nprogress.css'
import '@vueform/multiselect/themes/default.css'
import '@vueform/slider/themes/default.css'
import 'simplebar/dist/simplebar.css'
import 'tiny-slider/src/tiny-slider.scss'
import 'notyf/notyf.min.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/svg-arrow.css'
import 'tippy.js/dist/border.css'
import 'tippy.js/dist/backdrop.css'
import 'tippy.js/themes/light.css'

import './assets/scss/vendors/font-awesome-v5.css'
import './assets/scss/vendors/line-icons-pro.css'
import './assets/scss/vendors/prism-coldark-cold.css'
import './assets/scss/main.scss'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.use(VCalendar)
app.use(VueApexCharts)
app.use(VueCKEditor)
app.use(VueTippy, {
  defaultProps: {
    theme: 'light',
  },
})

app.component(VueMultiselect.name, VueMultiselect)
app.component(VueSlider.name, VueSlider)

app.directive('has-nested-router-link', hasNestedRouterLink)
app.directive('background', background)

app.mount('#app')
