import type { App } from 'vue'
import Multiselect from '@vueform/multiselect'
import '@vueform/multiselect/themes/default.css'

export default (app: App) => {
  app.component(Multiselect.name, Multiselect)
}
