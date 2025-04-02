export type NavbarTheme = 'default' | 'colored' | 'fade'

// -- Item
export interface NavbarItemMegamenu {
  type: 'megamenu'
  label: string
  id: string
  icon: string

  children: NavbarMegamenu[]
}
export interface NavbarItemDropdown {
  type: 'dropdown'
  label: string
  id: string
  icon: string

  children: NavbarDropdown[]
}
export interface NavbarItemAction {
  type: 'action'
  label: string
  icon: string
  onClick: (event: Event) => void
}
export interface NavbarItemLink {
  type: 'link'
  label: string
  icon: string
  to: string
}

export type NavbarItem =
  | NavbarItemMegamenu
  | NavbarItemDropdown
  | NavbarItemAction
  | NavbarItemLink

// -- Item Megamenu
export interface NavbarMegamenu {
  id: string
  label: string
  icon: string
  children: NavbarMegamenuLink[]
}
export interface NavbarMegamenuLink {
  label: string
  to: string
  tag?: string | number
}

// -- Item Dropdown
export interface NavbarDropdown {
  label: string
  to: string
  icon: string
}

// -- Context
export interface NavbarLayoutContext {
  theme: ComputedRef<NavbarTheme>
  links: ComputedRef<NavbarItem[]>

  isMobileSidebarOpen: Ref<boolean>
  activeMobileSubsidebarId: Ref<string>
  activeSubnavId: Ref<string | undefined>

  activeSubnav: ComputedRef<NavbarItem | undefined>
  activeMobileSubsidebar: ComputedRef<NavbarItem | undefined>

  toggleSubnav: (id: string) => void
  toggleMobileSubnav: (id: string) => void
}
