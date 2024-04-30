<script setup lang="ts">
import type { SideblockLayoutContext, SideblockItem, SideblockTheme } from './sideblock.types'
import { injectionKey } from './sideblock.context'

const props = withDefaults(
  defineProps<{
    links?: SideblockItem[]
    theme?: SideblockTheme
    size?: 'default' | 'large' | 'wide' | 'full'
    closeOnChange?: boolean
    openOnMounted?: boolean
  }>(),
  {
    links: () => [],
    theme: 'default',
    size: 'default',
  },
)

const { pageTitle } = useVueroContext()
const route = useRoute()

const isMobileSideblockOpen = ref(false)
const isDesktopSideblockOpen = ref(props.openOnMounted)

// provide context to children
const context: SideblockLayoutContext = {
  links: computed(() => props.links),
  theme: computed(() => props.theme),
  closeOnChange: computed(() => props.closeOnChange),
  openOnMounted: computed(() => props.openOnMounted),

  isMobileSideblockOpen,
  isDesktopSideblockOpen,
}
provide(injectionKey, context)

// using reactive context for slots, has better dev experience
const contextRx = reactive(context)

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
    <MobileNavbar v-model="isMobileSideblockOpen">
      <template #logo>
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
    <Transition name="fade">
      <MobileOverlay
        v-if="isMobileSideblockOpen"
        @click="isMobileSideblockOpen = false"
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

    <ViewWrapper
      full
      :class="[
        isDesktopSideblockOpen && 'is-pushed-block',
      ]"
    >
      <template v-if="props.size === 'full'">
        <slot name="page-heading">
          <SideblockPageHeading
            :open="isDesktopSideblockOpen"
            @toggle="isDesktopSideblockOpen = !isDesktopSideblockOpen"
          >
            {{ pageTitle }}

            <template #toolbar>
              <slot
                name="toolbar"
                v-bind="contextRx"
              />
            </template>
          </SideblockPageHeading>
        </slot>

        <slot v-bind="contextRx" />
      </template>
      <PageContentWrapper v-else :size="props.size">
        <PageContent
          class="is-relative"
        >
          <slot name="page-heading">
            <SideblockPageHeading
              :open="isDesktopSideblockOpen"
              @toggle="isDesktopSideblockOpen = !isDesktopSideblockOpen"
            >
              {{ pageTitle }}

              <template #toolbar>
                <slot
                  name="toolbar"
                  v-bind="contextRx"
                />
              </template>
            </SideblockPageHeading>
          </slot>

          <slot v-bind="contextRx" />
        </PageContent>
      </PageContentWrapper>
    </ViewWrapper>

    <slot name="extra" />
  </div>
</template>
