import { definePlugin } from '/@src/app'
import { plugin as VueTippy } from 'vue-tippy'

export default definePlugin(({ app }) => {
  app.use(VueTippy, {
    component: 'Tippy',
    defaultProps: {
      theme: 'light',
    },
  })
})
