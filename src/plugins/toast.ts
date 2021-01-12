import type { ViteSSGContext } from 'vite-ssg'
import Toast from 'vue-toastification'

export default ({ app, isClient }: ViteSSGContext) => {
  if (isClient) {
    app.use(Toast)
  }
}
