import type { InjectionKey } from 'vue'
import type { SideblockLayoutContext } from './sideblock.types'

export const injectionKey = Symbol('sideblock-layout') as InjectionKey<SideblockLayoutContext>

export function useSideblockLayoutContext() {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useSideblockLayoutContext() is called outside of <SideblockLayout> tree.')
  }

  return context
}
