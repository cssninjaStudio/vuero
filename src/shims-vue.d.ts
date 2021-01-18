declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module '*.md' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module 'vue3-apexcharts'

declare module 'highlight.js/lib/core'
declare module 'highlight.js/lib/languages/typescript'
declare module 'highlight.js/lib/languages/javascript'
declare module 'highlight.js/lib/languages/css'
declare module 'highlight.js/lib/languages/scss'
declare module 'highlight.js/lib/languages/json'
declare module 'highlight.js/lib/languages/bash'
declare module 'highlight.js/lib/languages/markdown'
declare module 'highlight.js/lib/languages/xml'
