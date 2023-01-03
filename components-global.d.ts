/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'vue' {
  export interface GlobalComponents {
    Tippy: typeof import('vue-tippy')['Tippy']
    VDatePicker: typeof import('v-calendar')['DatePicker']
  }
}

export {}
