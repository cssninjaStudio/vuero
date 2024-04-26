import type { InjectionKey } from 'vue'
import type { NavbarLayoutContext } from './navbar.types'

export const injectionKey = Symbol('navbar-layout') as InjectionKey<NavbarLayoutContext>

export function useNavbarLayoutContext() {
  const context = inject(injectionKey)

  if (!context) {
    throw new Error('useNavbarLayoutContext() is called outside of <NavbarLayout> tree.')
  }

  return context
}
