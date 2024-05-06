import { createDarkmode } from '~/composables/darkmode'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createDarkmode())
})