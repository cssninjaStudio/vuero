import { definePlugin } from '/@src/app'
import 'v-calendar/dist/style.css'

export default definePlugin(({ app }) => {
  app.component(
    'VCalendar',
    defineAsyncComponent({
      // @ts-expect-error - modules does not have exports field (required by moduleResolution = bundler)
      loader: () => import('v-calendar').then(mod => mod.Calendar),
      delay: 0,
      suspensible: false,
    }),
  )

  app.component(
    'VDatePicker',
    defineAsyncComponent({
      // @ts-expect-error - modules does not have exports field (required by moduleResolution = bundler)
      loader: () => import('v-calendar').then(mod => mod.DatePicker),
      delay: 0,
      suspensible: false,
    }),
  )
})
