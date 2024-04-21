// -- Navsearch
export type NavsearchTheme = 'default' | 'fade'
export type NavsearchScrollBehavior = 'reveal' | 'shrink' | 'fixed'

export interface NavsearchItem {
  to: string
  label: string
}

// -- Context
export interface NavsearchLayoutContext {
  theme: ComputedRef<NavsearchTheme>
  scrollBehavior: ComputedRef<NavsearchScrollBehavior>
  links: ComputedRef<NavsearchItem[]>

  isMobileSidebarOpen: Ref<boolean>
}
