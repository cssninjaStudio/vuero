import type { InjectionKey } from 'vue'
import type { NavsearchLayoutContext } from './navsearch.types'

export const injectionKey = Symbol('navsearch-layout') as InjectionKey<NavsearchLayoutContext>

export function useNavsearchLayoutContext() {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useNavsearchLayoutContext() is called outside of <NavsearchLayout> tree.')
  }

  return context
}
