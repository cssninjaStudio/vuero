export interface LandingNavItem {
  label: string
  to: string
  active?: boolean
}

export interface LandingFooterColumn {
  label: string
  children: {
    label: string
    to: string
  }[]
}

export interface LandingSocialItem {
  icon: string
  link: string
}
