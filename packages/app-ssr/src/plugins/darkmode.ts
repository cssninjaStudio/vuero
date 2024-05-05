import { createDarkmode } from '/@src/composables/darkmode'
import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(({ app }) => {
  app.use(createDarkmode())
})
