import { definePlugin } from '/@src/app'
import { createI18n } from 'vue-i18n'

/**
 * messages are generated using vite-plugin-i18n
 * each .json files located in the ./src/locales are registered in messages
 * @see https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
 */
import messages from '@intlify/unplugin-vue-i18n/messages'

export default definePlugin(({ app }) => {
  const defaultLocale = useStorage('locale', 'en')
  const i18n = createI18n({
    locale: defaultLocale.value,
    messages,
  })

  app.use(i18n)
})
