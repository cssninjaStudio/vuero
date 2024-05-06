<script setup lang="ts">
import type { SidebarLayoutContext, SidebarItem, SidebarItemSubsidebar, SidebarTheme } from './sidebar.types'
import { injectionKey } from './sidebar.context'

const props = withDefaults(
  defineProps<{
    links?: SidebarItem[]
    linksBottom?: SidebarItem[]
    theme?: SidebarTheme
    size?: 'default' | 'large' | 'wide' | 'full'
    defaultSidebar?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
  }>(),
  {
    links: () => [],
    linksBottom: () => [],
    defaultSidebar: '',
    theme: 'default',
    size: 'default',
  },
)
const pageTitle = useState('page-title')
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
  linksBottom: computed(() => props.linksBottom),
  theme: computed(() => props.theme),
  defaultSidebar: computed(() => props.defaultSidebar),
  closeOnChange: computed(() => props.closeOnChange),
  openOnMounted: computed(() => props.openOnMounted),

  isMobileSidebarOpen,
  isDesktopSidebarOpen,
  activeSubsidebarId,

  subsidebars,
  activeSubsidebar,
  isOpen,

  toggleSubsidebar,
}
provide(injectionKey, context)

// using reactive context for slots, has better dev experience
const contextRx = reactive(context)

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
    <MobileNavbar v-model="isMobileSidebarOpen">
      <template #logo>
        <slot name="logo" v-bind="contextRx" />

        <div class="brand-end">
          <slot name="toolbar-mobile" v-bind="contextRx" />
        </div>
      </template>
    </MobileNavbar>

    <MobileSidebar
      :class="[activeSubsidebar && isMobileSidebarOpen && 'is-active']"
    >
      <template v-if="props.links.length" #links>
        <slot name="sidebar-links-mobile" v-bind="contextRx">
          <li
            v-for="link in props.links"
            :key="link.id"
            :class="[link.hideMobile ? 'is-hidden-mobile' : '']"
          >
            <SidebarItem :link />
          </li>
        </slot>
      </template>

      <template v-if="props.linksBottom.length" #links-bottom>
        <slot name="sidebar-links-bottom-mobile" v-bind="contextRx">
          <li
            v-for="link in props.linksBottom"
            :key="link.id"
            :class="[link.hideMobile ? 'is-hidden-mobile' : '']"
          >
            <SidebarItem :link />
          </li>
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
        <slot name="sidebar-links" v-bind="contextRx">
          <li
            v-for="link in props.links"
            :key="link.id"
          >
            <SidebarItem :link />
          </li>
        </slot>
      </template>

      <template v-if="props.linksBottom.length" #links-bottom>
        <slot name="sidebar-links-bottom" v-bind="contextRx">
          <li
            v-for="link in props.linksBottom"
            :key="link.id"
          >
            <SidebarItem :link />
          </li>
        </slot>
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

    <ViewWrapper
      :class="[
        activeSubsidebar && isDesktopSidebarOpen && 'is-pushed-full',
      ]"
    >
      <template v-if="props.size === 'full'">
        <slot name="page-heading" v-bind="contextRx">
          <SidebarPageHeading
            :open="activeSubsidebar && isDesktopSidebarOpen"
            @toggle="isDesktopSidebarOpen = !isDesktopSidebarOpen"
          >
            {{ pageTitle }}

            <template #toolbar>
              <slot
                name="toolbar"
                v-bind="contextRx"
              />
            </template>
          </SidebarPageHeading>
        </slot>

        <slot v-bind="contextRx" />
      </template>
      <PageContentWrapper v-else :size="props.size">
        <PageContent
          class="is-relative"
        >
          <slot name="page-heading" v-bind="contextRx">
            <SidebarPageHeading
              :open="activeSubsidebar && isDesktopSidebarOpen"
              @toggle="isDesktopSidebarOpen = !isDesktopSidebarOpen"
            >
              {{ pageTitle }}

              <template #toolbar>
                <slot
                  name="toolbar"
                  v-bind="contextRx"
                />
              </template>
            </SidebarPageHeading>
          </slot>

          <slot v-bind="contextRx" />
        </PageContent>
      </PageContentWrapper>
    </ViewWrapper>

    <slot
      name="extra"
      v-bind="contextRx"
    />
  </div>
</template>
