declare module 'vue' {
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    Tippy: typeof import('vue-tippy')['Tippy']
    VDatePicker: typeof import('v-calendar')['DatePicker']
  }
}

export {}
