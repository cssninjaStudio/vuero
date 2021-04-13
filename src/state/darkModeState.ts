/**
 * This is a store that hold the dark mode state
 * It could be auto (fit system preference), dark or light
 *
 * Using useStorage from @vueuse/core allow persistance storage accross tabs/sessions
 *
 * We can import and set isDark anywhere in our project
 * @see /src/components/navigation/LandingNavigation.vue
 * @see /src/components/partials/toolbars/Toolbar.vue
 */

import { computed, watchEffect } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

type DarkModeSchema = 'auto' | 'dark' | 'light'

const DARK_MODE_BODY_CLASS = 'is-dark'
const preferredDark = usePreferredDark()

export const colorSchema = useStorage<DarkModeSchema>('color-schema', 'auto')
export const isDark = computed({
  get() {
    return colorSchema.value === 'auto'
      ? preferredDark.value
      : colorSchema.value === 'dark'
  },
  set(v: boolean) {
    if (v === preferredDark.value) colorSchema.value = 'auto'
    else colorSchema.value = v ? 'dark' : 'light'
  },
})

/**
 * watchEffect callbacks will be executed each time used reactives value has changed
 */
watchEffect(() => {
  const body = document.body

  if (isDark.value) {
    body.classList.add(DARK_MODE_BODY_CLASS)
  } else {
    body.classList.remove(DARK_MODE_BODY_CLASS)
  }
})
