import { definePlugin } from '/@src/app'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'

export default definePlugin(({ app }) => {
  app.use(SetupCalendar, {})

  app.component('VCalendar', Calendar)
  app.component('VDatePicker', DatePicker)
})
