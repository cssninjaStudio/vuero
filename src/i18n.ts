import { useStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

const defaultLocale = useStorage('locale', navigator?.language || 'en')
const i18n = createI18n({
  locale: defaultLocale.value,
  messages,
})

export default i18n
