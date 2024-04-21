import { notyfSymbol } from '../plugins/notyf'

// notyf is injected by the plugin in /src/plugins/notyf.ts
export const useNotyf = () => {
  return inject(notyfSymbol)!
}
