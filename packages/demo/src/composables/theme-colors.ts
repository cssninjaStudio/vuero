import { useCssVar } from '@vueuse/core'

export const useThemeColors = () => {
  const primary = useCssVar('--primary')
  const secondary = useCssVar('--secondary')
  const success = useCssVar('--success')
  const info = useCssVar('--info')
  const warning = useCssVar('--warning')
  const danger = useCssVar('--danger')
  const purple = useCssVar('--purple')
  const blue = useCssVar('--blue')
  const green = useCssVar('--green')
  const yellow = useCssVar('--yellow')
  const orange = useCssVar('--orange')
  const lime = useCssVar('--lime')
  const pink = useCssVar('--pink')
  const grey = useCssVar('--muted-grey')

  return reactive({
    primary,
    secondary,
    success,
    info,
    warning,
    danger,
    purple,
    blue,
    green,
    yellow,
    orange,
    lime,
    pink,
    grey,
  })
}
