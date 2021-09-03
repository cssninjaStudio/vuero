declare module '*.md' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module 'vue3-apexcharts'
declare module 'simplebar-vue'
declare module '@vueform/multiselect'
declare module '@vueform/slider'
declare module 'simple-datatables'
declare module 'photoswipe/dist/photoswipe'
declare module 'photoswipe/dist/photoswipe-ui-default'
declare module '@ckeditor/ckeditor5-vue'
declare module '@ckeditor/ckeditor5-build-classic'
declare module 'dropzone'
declare module '@intlify/vite-plugin-vue-i18n/messages'
declare module 'virtual:pwa-register'
declare module '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js'
