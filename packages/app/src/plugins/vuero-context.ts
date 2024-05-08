import { createVueroContext } from '/@src/composables/vuero-context'
import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(({ app}) => {
  app.use(createVueroContext())
})
