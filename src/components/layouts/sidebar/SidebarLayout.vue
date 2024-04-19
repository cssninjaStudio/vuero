<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

import type { SidebarLayoutContext, SidebarItem, SidebarItemSubsidebar, SidebarTheme } from './sidebar.types'
import { injectionKey } from './sidebar.context'

const props = withDefaults(
  defineProps<{
    links?: SidebarItem[]
    bottomLinks?: SidebarItem[]
    theme?: SidebarTheme
    defaultSidebar?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
    noViewWrapper?: boolean
  }>(),
  {
    links: () => [],
    bottomLinks: () => [],
    defaultSidebar: 'dashboard',
    theme: 'default',
  },
)

const viewWrapper = useViewWrapper()
const route = useRoute()
const isMobileSidebarOpen = ref(false)
const isDesktopSidebarOpen = ref(props.openOnMounted)
const activeSubsidebarId = ref(props.defaultSidebar)

const subsidebars = computed(() =>
  props.links.filter(item => item.type === 'subsidebar') as SidebarItemSubsidebar[],
)

const activeSubsidebar = computed(() => {
  if (!activeSubsidebarId.value || subsidebars.value.length === 0) {
    return undefined
  }

  return subsidebars.value?.find(item => item.id === activeSubsidebarId.value)
})
const isOpen = computed(() => {
  return Boolean(activeSubsidebar.value && (isMobileSidebarOpen.value || isDesktopSidebarOpen.value))
})

function toggleSubsidebar(id: string) {
  if (id === activeSubsidebarId.value) {
    isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value
  }
  else {
    isDesktopSidebarOpen.value = true
    activeSubsidebarId.value = id
  }
}

// provide context to children
const context: SidebarLayoutContext = {
  links: computed(() => props.links),
  bottomLinks: computed(() => props.bottomLinks),
  theme: computed(() => props.theme),
  defaultSidebar: computed(() => props.defaultSidebar),
  closeOnChange: computed(() => props.closeOnChange),
  openOnMounted: computed(() => props.openOnMounted),
  noViewWrapper: computed(() => props.noViewWrapper),

  isMobileSidebarOpen: readonly(isMobileSidebarOpen),
  isDesktopSidebarOpen: readonly(isDesktopSidebarOpen),
  activeSubsidebarId: readonly(activeSubsidebarId),

  subsidebars,
  activeSubsidebar,
  isOpen,

  toggleSubsidebar,
}
provide(injectionKey, context)

// using reactive context for slots, has better dev experience
const contextRx = reactive(context)

// push viewWrapper when subsidebar is open
watch(
  [
    () => Boolean(activeSubsidebar.value && isDesktopSidebarOpen.value),
    () => props.noViewWrapper,
  ],
  ([value, noViewWrapper]) => {
    if (noViewWrapper) return

    viewWrapper.setPushed(value)
  })

// close subsidebar when route changes
watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false

    if (props.closeOnChange) {
      isDesktopSidebarOpen.value = false
    }
  },
)
</script>

<template>
  <div class="sidebar-layout">
    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="activeSubsidebar && isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <slot name="logo" v-bind="contextRx" />

        <div class="brand-end">
          <slot name="toolbar-mobile" v-bind="contextRx" />
        </div>
      </template>
    </MobileNavbar>

    <MobileSidebar
      :is-open="activeSubsidebar && isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template v-if="props.links.length" #links>
        <li
          v-for="link in props.links"
          :key="link.id"
          :class="[link.hideMobile ? 'is-hidden-mobile' : '']"
        >
          <SidebarItem :link />
        </li>
      </template>

      <template v-if="props.bottomLinks.length" #bottom-links>
        <li
          v-for="link in props.bottomLinks"
          :key="link.id"
          :class="[link.hideMobile ? 'is-hidden-mobile' : '']"
        >
          <SidebarItem :link />
        </li>
      </template>
    </MobileSidebar>

    <Transition name="slide-x">
      <KeepAlive>
        <SidebarSubsidebarMobile
          v-if="activeSubsidebar && isMobileSidebarOpen"
          :key="activeSubsidebar.id"
          :items="activeSubsidebar.subsidebar.items"
          :label="activeSubsidebar.subsidebar.label"
        >
          <slot name="subsidebar-title-mobile" v-bind="contextRx" />
        </SidebarSubsidebarMobile>
      </KeepAlive>
    </Transition>
    <!-- /Mobile navigation -->

    <!-- Desktop navigation -->
    <Sidebar
      :theme="props.theme"
      :is-open="activeSubsidebar && isDesktopSidebarOpen"
    >
      <template
        v-if="'logo' in $slots"
        #logo
      >
        <slot name="logo" v-bind="contextRx" />
      </template>
      <template v-if="props.links.length" #links>
        <li
          v-for="link in props.links"
          :key="link.id"
        >
          <SidebarItem :link />
        </li>
      </template>

      <template v-if="props.bottomLinks.length" #bottom-links>
        <li
          v-for="link in props.bottomLinks"
          :key="link.id"
        >
          <SidebarItem :link />
        </li>
      </template>
    </Sidebar>

    <Transition name="slide-x">
      <KeepAlive>
        <SidebarSubsidebar
          v-if="activeSubsidebar && isDesktopSidebarOpen"
          :key="activeSubsidebar.id"
          :items="activeSubsidebar.subsidebar.items"
          :label="activeSubsidebar.subsidebar.label"
          @close="isDesktopSidebarOpen = false"
        >
          <slot name="subsidebar-title" v-bind="contextRx" />
        </SidebarSubsidebar>
      </KeepAlive>
    </Transition>
    <!-- /Desktop navigation -->

    <slot
      v-if="props.noViewWrapper"
      v-bind="contextRx"
    />
    <VViewWrapper v-else>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot
            v-bind="{
              isMobileSidebarOpen,
              isDesktopSidebarOpen,
              subsidebars,
              activeSubsidebarId,
              activeSubsidebar,
              toggleSubsidebar,
            }"
          />
        </template>

        <VPageContent
          v-else
          class="is-relative"
        >
          <SidebarPageHeading
            :open="activeSubsidebar && isDesktopSidebarOpen"
            @toggle="isDesktopSidebarOpen = !isDesktopSidebarOpen"
          >
            {{ viewWrapper.pageTitle }}

            <template #toolbar>
              <slot
                name="toolbar"
                v-bind="contextRx"
              />
            </template>
          </SidebarPageHeading>

          <slot
            v-bind="contextRx"
          />
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>

    <slot
      name="extra"
      v-bind="contextRx"
    />

    <div
      class="app-overlay"
      role="button"
      tabindex="0"
      :class="[isMobileSidebarOpen && 'is-active']"
      @click="isMobileSidebarOpen = false"
      @keydown.enter.prevent="isMobileSidebarOpen = false"
    />
  </div>
</template>
