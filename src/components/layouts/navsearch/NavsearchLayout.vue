<script setup lang="ts">
import type {
  NavsearchTheme,
  NavsearchItem,
  NavsearchScrollBehavior,
  NavsearchLayoutContext,
} from './navsearch.types'
import { injectionKey } from './navsearch.context'

const props = withDefaults(
  defineProps<{
    links?: NavsearchItem[]
    theme?: NavsearchTheme
    scrollBehavior?: NavsearchScrollBehavior
    nowrap?: boolean
  }>(),
  {
    links: () => [],
    scrollBehavior: 'fixed',
    theme: 'default',
  },
)

const viewWrapper = useViewWrapper()
const route = useRoute()
const isMobileSidebarOpen = ref(false)

const { y } = useWindowScroll()

const threshold = 25 // half of the navbar height
let lastScrollY = 0

const direction = ref<'up' | 'down'>('down')
const isScrolled = computed(() => {
  return y.value > threshold
})

// provide context to children
const context: NavsearchLayoutContext = {
  links: computed(() => props.links),
  theme: computed(() => props.theme),
  scrollBehavior: computed(() => props.scrollBehavior),

  isMobileSidebarOpen,
}
provide(injectionKey, context)

// using reactive context for slots, has better dev experience
const contextRx = reactive(context)

watch(y, (value) => {
  if (lastScrollY < value) {
    direction.value = 'down'
  }
  else {
    direction.value = 'up'
  }

  lastScrollY = value
})

watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false
  },
)
</script>

<template>
  <div
    class="navbar-layout navbar-layout-search"
    :class="[
      ...(props.scrollBehavior === 'shrink' ? [
        'is-shrink',
        isScrolled ? 'is-scrolled' : '',
      ] : []),

      ...(props.scrollBehavior === 'reveal' ? [
        'is-reveal',
        isScrolled && direction === 'down' ? 'is-scrolled' : '',
      ] : []),
    ]"
  >
    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <slot name="logo" v-bind="contextRx" />

        <div class="brand-end">
          <slot name="toolbar-mobile" v-bind="contextRx" />
        </div>
      </template>
    </MobileNavbar>

    <Transition name="slide-x">
      <NavsearchSubsidebarMobile
        v-if="isMobileSidebarOpen"
        :items="props.links"
      >
        <slot name="search" v-bind="contextRx" />
      </NavsearchSubsidebarMobile>
    </Transition>
    <!-- /Mobile navigation -->

    <!-- Desktop navigation -->
    <Navsearch
      :class="[
        props.theme === 'fade' && 'is-transparent',
        props.theme === 'fade' && isScrolled && 'is-scrolled',
      ]"
    >
      <template #title>
        <slot name="logo" v-bind="contextRx" />
        <div v-if="'logo' in $slots" class="separator" />
        <slot name="title" v-bind="contextRx">
          <h1 class="title is-6">
            {{ viewWrapper.pageTitle }}
          </h1>
        </slot>
      </template>

      <template #search>
        <slot name="search" v-bind="contextRx" />
      </template>

      <template #toolbar>
        <div class="toolbar desktop-toolbar">
          <slot name="toolbar" v-bind="contextRx" />
        </div>
      </template>

      <template v-if="'subnav-start' in $slots" #subtitle>
        <slot name="subnav-start" v-bind="contextRx" />
      </template>

      <template #links>
        <div class="buttons">
          <VLink
            v-for="link in props.links"
            :key="link.to"
            :to="link.to"
            class="button"
          >
            {{ link.label }}
          </VLink>
        </div>
      </template>

      <template v-if="'subnav-end' in $slots" #toolbar-bottom>
        <slot name="subnav-end" v-bind="contextRx" />
      </template>
    </Navsearch>
    <!-- /Desktop navigation -->

    <VViewWrapper top-nav>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot v-bind="contextRx" />
        </template>
        <VPageContent
          v-else
          class="is-relative"
        >
          <div class="is-navbar-lg">
            <NavsearchPageTitleMobile>
              <slot v-bind="contextRx" name="title-mobile">
                <h1 class="title is-4">
                  {{ viewWrapper.pageTitle }}
                </h1>
              </slot>

              <template #toolbar>
                <slot v-bind="contextRx" name="toolbar" />
              </template>
            </NavsearchPageTitleMobile>

            <slot v-bind="contextRx" />
          </div>
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>

    <slot v-bind="contextRx" name="extra" />

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

<style lang="scss" scoped>
:deep(.view-wrapper.has-top-nav) {
  padding-top: 20px;
  min-height: calc(100vh - 20px);

  .is-stuck {
    top: 100px;
  }
}

.is-shrink,
.is-reveal {
  .navbar-navbar-clean {
    transition: transform 0.3s;
  }
}

.is-shrink {
  &.is-scrolled {
    .navbar-navbar-clean:not(:has(.navbar-navbar-inner:focus-within)) {
      transform: translateY(-50px);
    }
  }
}

.is-reveal {
  &.is-scrolled {
    .navbar-navbar-clean:not(:focus-within) {
      transform: translateY(-100%);
    }
  }
}
</style>
