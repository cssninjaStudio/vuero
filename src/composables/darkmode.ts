import { injectionKey } from '../plugins/darkmode'

export const useDarkmode = () => {
  return inject(injectionKey)!
}
