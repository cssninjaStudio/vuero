import { hydrateOnVisible } from 'vue'
import { definePlugin } from '/@src/utils/plugins'
import 'v-calendar/dist/style.css'

export default definePlugin(({ app }) => {
  app.component(
    'VCalendar',
    defineAsyncComponent({
      loader: () => import('v-calendar').then(mod => mod.Calendar),
      delay: 0,
      suspensible: false,
      hydrate: hydrateOnVisible(),
    }),
  )

  app.component(
    'VDatePicker',
    defineAsyncComponent({
      loader: () => import('v-calendar').then(mod => mod.DatePicker),
      delay: 0,
      suspensible: false,
      hydrate: hydrateOnVisible(),
    }),
  )
})
