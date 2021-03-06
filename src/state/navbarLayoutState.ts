import { computed, ref, defineAsyncComponent } from 'vue'
import NavbarLayout from '/@src/layouts/NavbarLayout.vue'

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
