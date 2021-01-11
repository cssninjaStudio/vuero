import type { ViteSSGContext } from 'vite-ssg'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default ({ app }: ViteSSGContext) => {
  app.use(Toast)
}
