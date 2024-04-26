declare module '*.md' {
  import type { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module 'dropzone'
declare module '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js'
