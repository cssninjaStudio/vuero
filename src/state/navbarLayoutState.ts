/**
 * This is a store that hold which layout component is used on /navbar subpages
 *
 * Using defineAsyncComponent from vue allow to lazyload component only when they are used
 *
 * We can import and use navbarLayout anywhere in our project
 * @see /src/components/navigation/desktop/navbar/NavbarLayoutSwitcher.vue
 * @see /src/pages/navbar/dashboards.vue
 * @see /src/pages/navbar/layouts.vue
 */

import { computed, ref, defineAsyncComponent } from 'vue'

const NavbarLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarLayout.vue')
)
const NavbarFadeLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarFadeLayout.vue')
)
const NavbarColoredLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarColoredLayout.vue')
)
const NavbarAltLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarAltLayout.vue')
)
const NavbarAltColoredLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarAltColoredLayout.vue')
)
const NavbarCleanLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarCleanLayout.vue')
)
const NavbarCleanCenterLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarCleanCenterLayout.vue')
)
const NavbarCleanFadeLayout = defineAsyncComponent(
  () => import('/@src/layouts/NavbarCleanFadeLayout.vue')
)

const layoutsComponents = {
  'navbar-default': NavbarLayout,
  'navbar-fade': NavbarFadeLayout,
  'navbar-colored': NavbarColoredLayout,
  'navbar-alt': NavbarAltLayout,
  'navbar-alt-colored': NavbarAltColoredLayout,
  'navbar-clean': NavbarCleanLayout,
  'navbar-clean-center': NavbarCleanCenterLayout,
  'navbar-clean-fade': NavbarCleanFadeLayout,
}

export const navbarLayoutId = ref<keyof typeof layoutsComponents>(
  'navbar-default'
)
export const navbarLayout = computed(() => {
  return layoutsComponents[navbarLayoutId.value] || NavbarLayout
})

export function setLayout(layoutId: keyof typeof layoutsComponents) {
  if (layoutsComponents[layoutId]) {
    navbarLayoutId.value = layoutId
  }
}
