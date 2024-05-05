import { createNotyf } from '/@src/composables/notyf'
import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(async ({ app }) => {
  app.use(createNotyf())
})
