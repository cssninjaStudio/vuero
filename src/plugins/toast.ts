import { App } from 'vue'
import Toast from 'vue-toastification'

export default (app: App) => {
  app.use(Toast)
}
