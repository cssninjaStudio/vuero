// import { usePreferredLanguages, useStorage } from '@vueuse/core'
// import { computed, watch } from 'vue'
// import { useI18n } from 'vue-i18n'

// const preferredLanguages = usePreferredLanguages()
// const i18n = useI18n()
// const defaultLocale = computed(() => {
//   for (const language of preferredLanguages.value) {
//     if (i18n.availableLocales.includes(language)) {
//       return language
//     }
//   }

//   return 'en'
// })

// export const locale = useStorage('locale', defaultLocale.value)

// export default function init() {
//   if (locale.value !== i18n.locale.value) {
//     i18n.locale.value = locale.value
//   }
// }

// watch(i18n.locale, () => {
//   locale.value = i18n.locale.value
// })
