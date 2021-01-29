import type { App } from 'vue'
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

export default (app: App) => {
  app.component(Slider.name, Slider)
}
