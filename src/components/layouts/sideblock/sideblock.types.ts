import type { VNode, Component } from 'vue'

// -- Sideblock
export interface SideblockItemCollapse {
  type: 'collapse'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  children: {
    label: string
    to: string
    icon?: string
    tag?: string
  }[]
}
export interface SideblockItemLink {
  type: 'link'
  icon: string
  hideMobile?: boolean
  label?: string
  badge?: string | number

  to: string
}
export interface SideblockItemAction {
  type: 'action'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string
  badge?: string | number

  onClick: (event: Event) => void
}
export interface SideblockItemComponent {
  type: 'component'
  id: string
  hideMobile?: boolean
  label?: string

  component: string | Component | (() => VNode)
}
export interface SideblockItemDivider {
  type: 'divider'
  label?: string
}

export type SideblockItem =
  | SideblockItemCollapse
  | SideblockItemLink
  | SideblockItemAction
  | SideblockItemComponent
  | SideblockItemDivider

// -- Context
export type SideblockTheme =
  | 'default'
  | 'curved'
  | 'color'
  | 'color-curved'

export interface SideblockLayoutContext {
  links: ComputedRef<SideblockItem[]>
  theme: ComputedRef<SideblockTheme>

  closeOnChange: ComputedRef<boolean>
  openOnMounted: ComputedRef<boolean>

  isMobileSideblockOpen: Ref<boolean>
  isDesktopSideblockOpen: Ref<boolean>
}
