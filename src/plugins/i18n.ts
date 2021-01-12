import type { ViteSSGContext } from 'vite-ssg'
import { createI18n } from 'vue-i18n'

// import i18n resources
import en from '/@src/locales/en.json'
import zhCN from '/@src/locales/zh-CN.json'
import fr from '/@src/locales/fr.json'
import es from '/@src/locales/es.json'
import de from '/@src/locales/de.json'
import esMx from '/@src/locales/es-MX.json'

export default ({ app }: ViteSSGContext) => {
  const i18n = createI18n({
    locale: 'en',
    messages: {
      en,
      'zh-CN': zhCN,
      fr,
      es,
      de,
      'es-MX': esMx,
    },
  })

  app.use(i18n)
}
