import { injectionKey } from '/@src/plugins/darkmode'

export const useDarkmode = () => {
  return inject(injectionKey, {
    isDark: ref(false),
    onChange: async () => {},
  })
}
