import type { InjectionKey } from 'vue'
import type { SidebarLayoutContext } from './sidebar.types'

export const injectionKey = Symbol('sidebar-layout') as InjectionKey<SidebarLayoutContext>

export function useSidebarLayoutContext() {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useSidebarLayoutContext() is called outside of <SidebarLayout> tree.')
  }

  return context
}
