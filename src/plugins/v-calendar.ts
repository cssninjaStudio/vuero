import { definePlugin } from '/@src/app'
import 'v-calendar/dist/style.css'

export default definePlugin(({ app }) => {
  app.component(
    'VCalendar',
    defineAsyncComponent({
      loader: () => import('v-calendar').then((mod) => mod.Calendar),
      delay: 0,
      suspensible: false,
    })
  )

  app.component(
    'VDatePicker',
    defineAsyncComponent({
      loader: () => import('v-calendar').then((mod) => mod.DatePicker),
      delay: 0,
      suspensible: false,
    })
  )
})
