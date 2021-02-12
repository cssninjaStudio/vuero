import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import VCalendar from 'v-calendar'
import VueMultiselect from '@vueform/multiselect'
import VueSlider from '@vueform/slider'
import VueApexCharts from 'vue3-apexcharts'
import VueCKEditor from '@ckeditor/ckeditor5-vue'
import VueTippy from 'vue-tippy'
// import VueFilePond from 'vue-filepond'
// import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
// import FilePondPluginImageExitOrientation from 'filepond-plugin-image-exif-orientation'
// import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
// import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
// import FilePondPluginImageResize from 'filepond-plugin-image-resize'
// import FilePondPluginImageTransform from 'filepond-plugin-image-transform'

import hasChildren from './directives/has-children'
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
// import 'filepond/dist/filepond.min.css'
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
// import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.min.css'

import './assets/scss/vendors/font-awesome-v5.css'
import './assets/scss/vendors/line-icons-pro.css'
import './assets/scss/vendors/prism-coldark-cold.css'
import './assets/scss/main.scss'

import App from './App.vue'
import i18n from './i18n'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)
app.use(VCalendar)
app.use(VueApexCharts)
app.use(VueCKEditor)
// app.use(VueFilePond)
app.use(VueTippy, {
  defaultProps: {
    theme: 'light',
  },
})

app.component(VueMultiselect.name, VueMultiselect)
app.component(VueSlider.name, VueSlider)

app.directive('has-children', hasChildren)
app.directive('background', background)

app.mount('#app')
