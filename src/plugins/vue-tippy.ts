import { plugin as VueTippy } from 'vue-tippy'

import { definePlugin } from '/@src/utils/plugins'

export default definePlugin(({ app }) => {
  app.use(VueTippy, {
    component: 'Tippy',
    defaultProps: {
      theme: 'light',
    },
  })
})
