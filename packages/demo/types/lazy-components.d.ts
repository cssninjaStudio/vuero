declare module 'vue' {
  import type Multiselect from '@vueform/multiselect'
  import type Slider from '@vueform/slider'
  import type { Calendar, DatePicker } from 'v-calendar'
  import type ApexChart from 'vue3-apexcharts'

  export interface GlobalComponents {
    VDatePicker: DatePicker
    VCalendar: Calendar
    Multiselect: Multiselect
    Slider: Slider
    ApexChart: ApexChart
  }
}

export {}
