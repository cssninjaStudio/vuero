/**
 * DarkModeState Composition API
 */

import type { Ref } from 'vue'
import { computed, watchEffect } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

type DarkModeSchema = Ref<'auto' | 'dark' | 'light'>

/* DarkModeState data */
const DARK_MODE_BODY_CLASS = 'is-dark'
const preferredDark = usePreferredDark()

export const colorSchema = useStorage('color-schema', 'auto') as DarkModeSchema
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

// update body classList when state changed
watchEffect(() => {
  const body = document.body
  const images = document.querySelectorAll(
    '.theme-image[data-dark], .theme-image[data-light]'
  )

  if (isDark.value) {
    body.classList.add(DARK_MODE_BODY_CLASS)
    images.forEach((element) => {
      const image = element as HTMLImageElement
      if (image) {
        image.src = image.dataset.dark || image.src
      }
    })
  } else {
    body.classList.remove(DARK_MODE_BODY_CLASS)
    images.forEach((element) => {
      const image = element as HTMLImageElement
      if (image) {
        image.src = image.dataset.light || image.src
      }
    })
  }
})
