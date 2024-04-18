<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

import type { SideblockLayoutContext, SideblockItem, SideblockTheme } from './sideblock.types'
import { injectionKey } from './sideblock.context'

const props = withDefaults(
  defineProps<{
    links?: SideblockItem[]
    theme?: SideblockTheme
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    links: () => [],
    theme: 'default',
  },
)

const viewWrapper = useViewWrapper()
const route = useRoute()

const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.openOnMounted)

// provide context to children
const context: SideblockLayoutContext = {
  links: computed(() => props.links),
  theme: computed(() => props.theme),
  closeOnChange: computed(() => props.closeOnChange),
  openOnMounted: computed(() => props.openOnMounted),

  isMobileSideblockOpen: readonly(isMobileSideblockOpen),
  isDesktopSideblockOpen: readonly(isDesktopSideblockOpen),
}
provide(injectionKey, context)

// using reactive context for slots, has better dev experience
const contextRx = reactive(context)

/**
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushedBlock(isDesktopSideblockOpen.value ?? false)
})
onMounted(() => {
  viewWrapper.setPushed(false)
})
watch(
  () => route.fullPath,
  () => {
    isMobileSideblockOpen.value = false

    if (props.closeOnChange && isDesktopSideblockOpen.value) {
      isDesktopSideblockOpen.value = false
    }
  },
)
</script>

<template>
  <div class="sidebar-layout">
    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSideblockOpen"
      @toggle="isMobileSideblockOpen = !isMobileSideblockOpen"
    >
      <template #brand>
        <slot name="logo" v-bind="contextRx" />

        <div class="brand-end">
          <slot name="toolbar-mobile" v-bind="contextRx" />
        </div>
      </template>
    </MobileNavbar>

    <Transition name="slide-x">
      <SideblockSubsidebarMobile
        v-if="isMobileSideblockOpen"
        :items="props.links"
      />
    </Transition>
    <!-- /Mobile navigation -->

    <!-- Desktop navigation -->
    <Transition name="slide-x">
      <Sideblock
        v-if="isDesktopSideblockOpen"
        :theme="props.theme"
      >
        <template #header>
          <slot name="logo" v-bind="contextRx" />
        </template>
        <template #links>
          <SideblockItem
            v-for="(link, key) in props.links"
            :key
            :link
          />
        </template>

        <template #bottom-links>
          <slot name="bottom-links" v-bind="contextRx" />
        </template>
      </Sideblock>
    </Transition>
    <!-- /Desktop navigation -->

    <VViewWrapper full>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot v-bind="contextRx" />
        </template>
        <VPageContent
          v-else
          class="is-relative"
        >
          <SidebarPageHeading
            :open="isDesktopSideblockOpen"
            @toggle="isDesktopSideblockOpen = !isDesktopSideblockOpen"
          >
            {{ viewWrapper.pageTitle }}

            <template #toolbar>
              <slot
                name="toolbar"
                v-bind="contextRx"
              />
            </template>
          </SidebarPageHeading>

          <slot v-bind="contextRx" />
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>

    <slot name="extra" />
  </div>
</template>
