<script setup lang="ts">
import type {
  NavbarTheme,
  NavbarItem,
  NavbarItemMegamenu,
  NavbarItemDropdown,
  NavbarLayoutContext,
} from './navbar.types'
import { injectionKey } from './navbar.context'

const props = withDefaults(
  defineProps<{
    links?: NavbarItem[]
    theme?: NavbarTheme
    size?: 'default' | 'large' | 'wide' | 'full'
  }>(),
  {
    links: () => [],
    theme: 'default',
    size: 'default',
  },
)

const pageTitle = useVueroContext<string>('page-title')
const route = useRoute()

const linksWithChildren = computed(() => {
  return props.links.filter(link => link.type === 'megamenu' || link.type === 'dropdown') as (NavbarItemMegamenu | NavbarItemDropdown)[]
})

const isMobileSidebarOpen = ref(false)
const activeMobileSubsidebarId = ref<string>(linksWithChildren.value?.[0]?.id)
const activeSubnavId = ref<string | undefined>()

const activeSubnav = computed(() => {
  return linksWithChildren.value.find(link => link.id === activeSubnavId.value)
})
const activeMobileSubsidebar = computed(() => {
  return linksWithChildren.value.find(link => link.id === activeMobileSubsidebarId.value)
})

function toggleSubnav(id: string) {
  if (activeSubnavId.value === id) {
    activeSubnavId.value = undefined
  }
  else {
    activeSubnavId.value = id
  }
}
function toggleMobileSubnav(id: string) {
  if (activeMobileSubsidebarId.value === id) {
    isMobileSidebarOpen.value = false
  }
  else {
    activeMobileSubsidebarId.value = id
    isMobileSidebarOpen.value = true
  }
}

// provide context to children
const context: NavbarLayoutContext = {
  links: computed(() => props.links),
  theme: computed(() => props.theme),

  isMobileSidebarOpen,
  activeMobileSubsidebarId,
  activeSubnavId,

  activeSubnav,
  activeMobileSubsidebar,

  toggleSubnav,
  toggleMobileSubnav,
}
provide(injectionKey, context)

// using reactive context for slots, has better dev experience
const contextRx = reactive(context)

watch(
  () => route.fullPath,
  () => {
    activeSubnavId.value = undefined
    isMobileSidebarOpen.value = false
  },
)

watch(() => Boolean(activeSubnav.value?.type === 'megamenu' || isMobileSidebarOpen.value), (value) => {
  if (value) {
    document.documentElement.classList.add('no-scroll')
  }
  else {
    document.documentElement.classList.remove('no-scroll')
  }
})
</script>

<template>
  <div class="navbar-layout">
    <!-- Mobile navigation -->
    <MobileNavbar v-model="isMobileSidebarOpen">
      <template #logo>
        <slot name="logo" v-bind="contextRx" />

        <div class="brand-end">
          <slot name="toolbar-mobile" v-bind="contextRx" />
        </div>
      </template>
    </MobileNavbar>

    <MobileSidebar
      :class="[isMobileSidebarOpen && 'is-active']"
    >
      <template #links>
        <slot name="navbar-links-mobile" v-bind="contextRx">
          <NavbarItemMobile
            v-for="link in props.links"
            :key="link.label"
            :link
          />
        </slot>
      </template>
    </MobileSidebar>
    <Transition name="fade">
      <MobileOverlay
        v-if="isMobileSidebarOpen"
        @click="isMobileSidebarOpen = false"
      />
    </Transition>

    <Transition name="slide-x">
      <KeepAlive>
        <NavbarSubsidebarMobile
          v-if="isMobileSidebarOpen && activeMobileSubsidebar?.children"
          :key="activeMobileSubsidebarId"
          :label="activeMobileSubsidebar.label"
          :items="activeMobileSubsidebar.children"
        />
      </KeepAlive>
    </Transition>
    <!-- /Mobile navigation -->

    <!-- Desktop navigation -->
    <Navbar>
      <template #title>
        <slot name="logo" v-bind="contextRx" />

        <div v-if="'logo' in $slots" class="separator" />
        <slot name="navbar-title" v-bind="contextRx">
          <h1 class="title is-5">
            {{ pageTitle }}
          </h1>
        </slot>
      </template>

      <template #toolbar>
        <div class="toolbar desktop-toolbar">
          <slot name="toolbar" v-bind="contextRx" />
        </div>
      </template>

      <template #links>
        <slot name="navbar-links" v-bind="contextRx">
          <div class="centered-links">
            <NavbarItem
              v-for="link in props.links"
              :key="link.label"
              :link="link"
            />
          </div>
        </slot>
      </template>
    </Navbar>

    <div
      class="navbar-subnavbar is-hidden-mobile"
      :class="[activeSubnav?.type === 'megamenu' && 'is-active']"
    >
      <NavbarMegamenu
        v-if="activeSubnav?.type === 'megamenu'"
        :key="activeSubnavId"
        :children="activeSubnav.children"
        class="is-active"
      >
        <template v-if="'megamenu-start' in $slots" #start>
          <slot name="megamenu-start" v-bind="contextRx" />
        </template>
        <template v-if="'megamenu-end' in $slots" #end>
          <slot name="megamenu-end" v-bind="contextRx" />
        </template>
        <template v-if="'megamenu-top' in $slots" #top>
          <slot name="megamenu-top" v-bind="contextRx" />
        </template>
        <template v-if="'megamenu-bottom' in $slots" #bottom>
          <slot name="megamenu-bottom" v-bind="contextRx" />
        </template>
      </NavbarMegamenu>
    </div>
    <!-- /Desktop navigation -->

    <ViewWrapper full top-nav>
      <template v-if="props.size === 'full'">
        <div class="is-navbar-md">
          <slot name="page-heading" v-bind="contextRx">
            <NavbarPageTitleMobile>
              <slot name="navbar-title-mobile" v-bind="contextRx">
                <h1 class="title is-4">
                  {{ pageTitle }}
                </h1>
              </slot>

              <template #toolbar>
                <slot name="toolbar" v-bind="contextRx" />
              </template>
            </NavbarPageTitleMobile>
          </slot>

          <slot v-bind="contextRx" />
        </div>
      </template>
      <PageContentWrapper v-else :size="props.size">
        <PageContent class="is-relative">
          <div class="is-navbar-md">
            <slot name="page-heading" v-bind="contextRx">
              <NavbarPageTitleMobile>
                <slot name="navbar-title-mobile" v-bind="contextRx">
                  <h1 class="title is-4">
                    {{ pageTitle }}
                  </h1>
                </slot>

                <template #toolbar>
                  <slot name="toolbar" v-bind="contextRx" />
                </template>
              </NavbarPageTitleMobile>
            </slot>
            <slot v-bind="contextRx" />
          </div>
        </PageContent>
      </PageContentWrapper>
    </ViewWrapper>

    <slot name="extra" v-bind="contextRx" />
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';
@import '/@src/scss/layout/navbar';
</style>
