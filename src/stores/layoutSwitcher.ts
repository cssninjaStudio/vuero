import { computed, ref, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { acceptHMRUpdate, defineStore } from 'pinia'

export type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'

export type SideblockTheme = 'default' | 'curved' | 'color' | 'color-curved'

export const useLayoutSwitcher = defineStore('layoutSwitcher', () => {
  const route = useRoute()
  const sidebarTheme = ref<SidebarTheme>('default')
  const NavbarLayout = defineAsyncComponent(
    () => import('/@src/layouts/NavbarLayout.vue')
  )
  const NavbarDropdownLayout = defineAsyncComponent(
    () => import('/@src/layouts/NavbarDropdownLayout.vue')
  )
  const NavbarSearchLayout = defineAsyncComponent(
    () => import('/@src/layouts/NavbarSearchLayout.vue')
  )
  const layoutsComponents = {
    'navbar-default': NavbarLayout,
    'navbar-fade': NavbarLayout,
    'navbar-colored': NavbarLayout,
    'navbar-dropdown': NavbarDropdownLayout,
    'navbar-dropdown-colored': NavbarDropdownLayout,
    'navbar-clean': NavbarSearchLayout,
    'navbar-clean-center': NavbarSearchLayout,
    'navbar-clean-fade': NavbarSearchLayout,
  }

  const navbarLayoutId = ref<keyof typeof layoutsComponents>('navbar-default')
  const navbarLayoutComponent = computed(() => {
    return layoutsComponents[navbarLayoutId.value] || NavbarLayout
  })
  const navbarLayoutTheme = computed(() => {
    switch (navbarLayoutId.value) {
      case 'navbar-fade':
      case 'navbar-clean-fade':
        return 'fade'
      case 'navbar-colored':
      case 'navbar-dropdown-colored':
        return 'colored'
      case 'navbar-clean-center':
        return 'center'
      default:
        return 'default'
    }
  })

  const isNavbarLayout = computed(() => {
    return route.fullPath.startsWith('/navbar/')
  })
  const isSidebarLayout = computed(() => {
    return route.fullPath.startsWith('/sidebar/')
  })

  const navbarLayoutLink = computed(() => {
    return route.fullPath.replace('sidebar', 'navbar')
  })

  const sidebarLayoutLink = computed(() => {
    return route.fullPath.replace('navbar', 'sidebar')
  })

  const hasDynamicLayout = computed(() => {
    return isNavbarLayout.value || isSidebarLayout.value
  })

  function setSidebarTheme(theme: SidebarTheme) {
    sidebarTheme.value = theme
  }

  function setNavbarLayoutId(theme: keyof typeof layoutsComponents) {
    navbarLayoutId.value = theme
  }

  return {
    sidebarTheme,
    navbarLayoutId,
    navbarLayoutComponent,
    navbarLayoutTheme,
    isNavbarLayout,
    isSidebarLayout,
    navbarLayoutLink,
    sidebarLayoutLink,
    hasDynamicLayout,
    setNavbarLayoutId,
    setSidebarTheme,
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
