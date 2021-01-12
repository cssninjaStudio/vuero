/**
 * DarkModeState Composition API
 */

import type { Ref } from 'vue'
import { computed, watch } from 'vue'
import { usePreferredDark, useStorage } from '@vueuse/core'

/* DarkModeState data */
const DARK_MODE_CSS = 'is-dark'
const preferredDark = usePreferredDark()

export const colorSchema = useStorage('color-schema', 'auto') as Ref<
  'auto' | 'dark' | 'light'
>
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

export default function init() {
  // update body classList when state changed
  watch(
    isDark,
    () => {
      const body = document.body
      const images = document.querySelectorAll('.theme-image')

      if (isDark.value) {
        body.classList.add(DARK_MODE_CSS)
        images.forEach((element) => {
          const image = element as HTMLImageElement
          if (image) {
            image.src = image.dataset.dark || image.src
          }
        })
      } else {
        body.classList.remove(DARK_MODE_CSS)
        images.forEach((element) => {
          const image = element as HTMLImageElement
          if (image) {
            image.src = image.dataset.light || image.src
          }
        })
      }
    },
    {
      immediate: true,
    }
  )
}
