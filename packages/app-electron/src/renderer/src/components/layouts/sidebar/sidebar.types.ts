import type { VNode, Component } from 'vue'

// -- Sidebar
export interface SidebarItemSubsidebar {
  type: 'subsidebar'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  subsidebar: {
    label: string
    items: SubsidebarItem[]
  }
}
export interface SidebarItemLink {
  type: 'link'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  to: string
}
export interface SidebarItemAction {
  type: 'action'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  onClick: (event: Event) => void
}
export interface SidebarItemComponent {
  type: 'component'
  id: string
  hideMobile?: boolean
  label?: string

  component: string | Component | (() => VNode)
}

export type SidebarItem =
  | SidebarItemSubsidebar
  | SidebarItemLink
  | SidebarItemAction
  | SidebarItemComponent

// -- Subsidebar
export interface SubsidebarItemCollapse {
  type: 'collapse'
  id: string
  label: string
  children: {
    label: string
    to: string
    icon?: string
    tag?: string | number
  }[]
}
export interface SubsidebarItemLink {
  type: 'link'
  label: string
  to: string
  tag?: string | number
}
export interface SubsidebarItemDivider {
  type: 'divider'
  label?: string
}

export type SubsidebarItem =
  | SubsidebarItemCollapse
  | SubsidebarItemLink
  | SubsidebarItemDivider

// -- Context
export type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

export interface SidebarLayoutContext {
  links: ComputedRef<SidebarItem[]>
  linksBottom: ComputedRef<SidebarItem[]>
  theme: ComputedRef<SidebarTheme>

  defaultSidebar: ComputedRef<string>
  closeOnChange: ComputedRef<boolean>
  openOnMounted: ComputedRef<boolean>

  isMobileSidebarOpen: Ref<boolean>
  isDesktopSidebarOpen: Ref<boolean>
  activeSubsidebarId: Ref<string>

  isOpen: ComputedRef<boolean>
  subsidebars: ComputedRef<SidebarItemSubsidebar[]>
  activeSubsidebar: ComputedRef<SidebarItemSubsidebar | undefined>

  toggleSubsidebar: (id: string) => void
}
