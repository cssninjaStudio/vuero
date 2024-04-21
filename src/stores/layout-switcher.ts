/**
 * This store is used for the layout switcher.
 * It's used on the demo page to allow user to change which component
 * is used for the layout.
 *
 * We can import and set activeSidebar (or use toggleSidebar) anywhere in our project
 * @see /src/pages/components.vue
 * @see /src/pages/sidebar/dashboards.vue
 * @see /src/layouts/layout-switcher/LayoutSwitcher.vue
 */

import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLayoutSwitcher = defineStore('layoutSwitcher', () => {
  const route = useRoute()

  // utils

  const isNavbarRoute = computed(() => route?.fullPath?.startsWith?.('/navbar/'))
  const isSidebarRoute = computed(() => route?.fullPath?.startsWith?.('/sidebar/'))
  const hasDynamicLayout = computed(() => isNavbarRoute.value || isSidebarRoute.value)
  const navbarLayoutLink = computed(
    () => route?.fullPath?.replace?.('sidebar', 'navbar') ?? '',
  )
  const sidebarLayoutLink = computed(
    () => route?.fullPath?.replace?.('navbar', 'sidebar') ?? '',
  )

  // navbar
  const NavbarLayout = defineAsyncComponent({
    loader: () => import('/@src/layouts/navbar.vue'),
    delay: 0,
    suspensible: false,
  })
  const NavsearchLayout = defineAsyncComponent({
    loader: () => import('/@src/layouts/navsearch.vue'),
    delay: 0,
    suspensible: false,
  })

  const navbarComponents = {
    'navbar-default': NavbarLayout,
    'navbar-fade': NavbarLayout,
    'navbar-colored': NavbarLayout,

    'navsearch-fixed': NavsearchLayout,
    'navsearch-fixed-fade': NavsearchLayout,
    'navsearch-shrink': NavsearchLayout,
    'navsearch-reveal': NavsearchLayout,
  } as const

  type NavbarComponentsId = keyof typeof navbarComponents
  const navbarComponentsIds = Object.keys(navbarComponents)

  const navbarLayoutId = ref<NavbarComponentsId>('navbar-default')
  const navbarLayoutComponent = computed(() => {
    return navbarComponents[navbarLayoutId.value] || NavbarLayout
  })

  const navbarLayoutTheme = computed(() => {
    switch (navbarLayoutId.value) {
      case 'navbar-fade':
      case 'navsearch-fixed-fade':
        return 'fade'
      case 'navbar-colored':
        return 'colored'
      case 'navsearch-fixed':
      case 'navsearch-shrink':
      case 'navsearch-reveal':
      default:
        return 'default'
    }
  })

  // sidebar
  const SidebarLayout = defineAsyncComponent({
    loader: () => import('/@src/layouts/sidebar.vue'),
    delay: 0,
    suspensible: false,
  })
  const SideblockLayout = defineAsyncComponent({
    loader: () => import('/@src/layouts/sideblock.vue'),
    delay: 0,
    suspensible: false,
  })

  const sidebarComponents = {
    'sidebar-default': SidebarLayout,
    'sidebar-color': SidebarLayout,
    'sidebar-color-curved': SidebarLayout,
    'sidebar-curved': SidebarLayout,
    'sidebar-float': SidebarLayout,
    'sidebar-labels': SidebarLayout,
    'sidebar-labels-hover': SidebarLayout,

    'sideblock-default': SideblockLayout,
    'sideblock-color': SideblockLayout,
    'sideblock-color-curved': SideblockLayout,
    'sideblock-curved': SideblockLayout,
  } as const

  type SidebarComponentsId = keyof typeof sidebarComponents
  const sidebarComponentsIds = Object.keys(sidebarComponents)

  const sidebarLayoutId = ref<SidebarComponentsId>('sidebar-default')
  const sidebarLayoutComponent = computed(() => {
    return sidebarComponents[sidebarLayoutId.value] || SidebarLayout
  })

  const sidebarLayoutTheme = computed(() => {
    switch (sidebarLayoutId.value) {
      case 'sidebar-float':
        return 'float'
      case 'sidebar-labels':
        return 'labels'
      case 'sidebar-labels-hover':
        return 'labels-hover'
      case 'sidebar-color':
      case 'sideblock-color':
        return 'color'
      case 'sidebar-curved':
      case 'sideblock-curved':
        return 'curved'
      case 'sideblock-color-curved':
      case 'sidebar-color-curved':
        return 'color-curved'
      case 'sidebar-default':
      case 'sideblock-default':
      default:
        return 'default'
    }
  })

  // dynamic layout
  const dynamicLayoutId = computed<NavbarComponentsId | SidebarComponentsId>({
    get: () => {
      if (isNavbarRoute.value) {
        return navbarLayoutId.value
      }
      else {
        return sidebarLayoutId.value
      }
    },
    set: (value) => {
      if (navbarComponentsIds.includes(value)) {
        navbarLayoutId.value = value as NavbarComponentsId
        return
      }

      if (sidebarComponentsIds.includes(value)) {
        sidebarLayoutId.value = value as SidebarComponentsId
      }
    },
  })

  const dynamicLayoutComponent = computed(() => {
    if (isNavbarRoute.value) {
      return navbarLayoutComponent.value
    }
    else {
      return sidebarLayoutComponent.value
    }
  })

  const contentSize = ref<'default' | 'large' | 'wide' | 'full'>('default')

  const dynamicLayoutProps = computed(() => {
    if (isNavbarRoute.value) {
      return {
        theme: navbarLayoutTheme.value,
        key: navbarLayoutId.value,
        size: contentSize.value,
        scrollBehavior:
          navbarLayoutId.value === 'navsearch-shrink'
            ? 'shrink'
            : navbarLayoutId.value === 'navsearch-reveal'
              ? 'reveal'
              : undefined,
      }
    }
    else {
      return {
        theme: sidebarLayoutTheme.value,
        size: contentSize.value,
        key: sidebarLayoutId.value,
      }
    }
  })

  function setDynamicLayoutId(theme: NavbarComponentsId | SidebarComponentsId) {
    dynamicLayoutId.value = theme
  }

  return {
    contentSize,
    dynamicLayoutComponent,
    dynamicLayoutProps,
    dynamicLayoutId,
    setDynamicLayoutId,
    sidebarLayoutId,
    sidebarLayoutComponent,
    sidebarLayoutTheme,
    navbarLayoutId,
    navbarLayoutComponent,
    navbarLayoutTheme,
    isNavbarRoute,
    isSidebarRoute,
    navbarLayoutLink,
    sidebarLayoutLink,
    hasDynamicLayout,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutSwitcher, import.meta.hot))
}
