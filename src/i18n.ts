import { useStorage } from '@vueuse/core'
import { createI18n } from 'vue-i18n'

// import i18n locales
import en from '/@src/locales/en.json'
import zhCN from '/@src/locales/zh-CN.json'
import fr from '/@src/locales/fr.json'
import es from '/@src/locales/es.json'
import de from '/@src/locales/de.json'
import esMx from '/@src/locales/es-MX.json'

const defaultLocale = useStorage('locale', navigator?.language || 'en')
const i18n = createI18n({
  locale: defaultLocale.value,
  messages: {
    en,
    'zh-CN': zhCN,
    fr,
    es,
    de,
    'es-MX': esMx,
  },
})

export default i18n
