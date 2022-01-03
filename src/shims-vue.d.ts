declare module '*.md' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

// this is a temporary fix for the alpha.6 v-calendar version
declare module 'v-calendar' {
  import { DefineComponent } from 'vue'
  export const SetupCalendar: any
  export const Calendar: DefineComponent
  export const DatePicker: DefineComponent
  export const Popover: DefineComponent
  export const PopoverRow: DefineComponent
}

declare module 'vue3-apexcharts'
declare module 'vue-tippy'
declare module 'simplebar-vue'
declare module '@vueform/multiselect'
declare module '@vueform/slider'
declare module 'simple-datatables'
declare module '@ckeditor/ckeditor5-vue'
declare module '@ckeditor/ckeditor5-build-classic'
declare module 'dropzone'
declare module '@intlify/vite-plugin-vue-i18n/messages'
declare module '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js'
declare module 'vue-accessible-color-picker'
