import { computed, reactive } from 'vue'
import { useCssVar } from '@vueuse/core'
import { HSLToHex } from '/@src/utils/color-converter'

export const useThemeColors = () => {
  const primary = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--primary', document.documentElement)
  const success = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--success', document.documentElement)
  const info = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--info', document.documentElement)
  const warning = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--warning', document.documentElement)
  const danger = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--danger', document.documentElement)
  const purple = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--purple', document.documentElement)
  const blue = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--blue', document.documentElement)
  const green = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--green', document.documentElement)
  const yellow = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--yellow', document.documentElement)
  const orange = import.meta.env.SSR
    ? ref('transparent')
    : useCssVar('--orange', document.documentElement)

  const themeColors = reactive({
    primary: computed(() => HSLToHex(primary.value)),
    primaryMedium: '#b4e4ce',
    primaryLight: '#f7fcfa',
    secondary: '#ff227d',
    accent: '#797bf2',
    accentMedium: '#d4b3ff',
    accentLight: '#b8ccff',
    success: computed(() => HSLToHex(success.value)),
    info: computed(() => HSLToHex(info.value)),
    warning: computed(() => HSLToHex(warning.value)),
    danger: computed(() => HSLToHex(danger.value)),
    purple: computed(() => HSLToHex(purple.value)),
    blue: computed(() => HSLToHex(blue.value)),
    green: computed(() => HSLToHex(green.value)),
    yellow: computed(() => HSLToHex(yellow.value)),
    orange: computed(() => HSLToHex(orange.value)),
    lightText: '#a2a5b9',
    fadeGrey: '#ededed',
  } as const)

  return themeColors
}
