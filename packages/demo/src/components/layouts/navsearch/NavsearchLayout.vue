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
    size?: 'default' | 'large' | 'wide' | 'full'
    scrollBehavior?: NavsearchScrollBehavior
  }>(),
  {
    links: () => [],
    scrollBehavior: 'fixed',
    theme: 'default',
    size: 'default',
  },
)

const pageTitle = useVueroContext<string>('page-title')
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
    <MobileNavbar v-model="isMobileSidebarOpen">
      <template #logo>
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
        <slot name="navbar-content" v-bind="contextRx" />

        <template #links>
          <slot name="navbar-links-mobile" />
        </template>
      </NavsearchSubsidebarMobile>
    </Transition>
    <Transition name="fade">
      <MobileOverlay
        v-if="isMobileSidebarOpen"
        @click="isMobileSidebarOpen = false"
      />
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
        <slot name="navbar-title" v-bind="contextRx">
          <h1 class="title is-6">
            {{ pageTitle }}
          </h1>
        </slot>
      </template>

      <template #search>
        <slot name="navbar-content" v-bind="contextRx" />
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
        <slot name="subnav-links" v-bind="contextRx">
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
        </slot>
      </template>

      <template v-if="'subnav-end' in $slots" #toolbar-bottom>
        <slot name="subnav-end" v-bind="contextRx" />
      </template>
    </Navsearch>
    <!-- /Desktop navigation -->

    <ViewWrapper top-nav>
      <template v-if="props.size === 'full'">
        <div class="is-navbar-lg">
          <slot name="page-heading">
            <NavsearchPageTitleMobile>
              <slot v-bind="contextRx" name="title-mobile">
                <h1 class="title is-4">
                  {{ pageTitle }}
                </h1>
              </slot>

              <template #toolbar>
                <slot v-bind="contextRx" name="toolbar" />
              </template>
            </NavsearchPageTitleMobile>
          </slot>

          <slot v-bind="contextRx" />
        </div>
      </template>
      <PageContentWrapper v-else :size="props.size">
        <PageContent
          class="is-relative"
        >
          <div class="is-navbar-lg">
            <slot name="page-heading">
              <NavsearchPageTitleMobile>
                <slot v-bind="contextRx" name="title-mobile">
                  <h1 class="title is-4">
                    {{ pageTitle }}
                  </h1>
                </slot>

                <template #toolbar>
                  <slot v-bind="contextRx" name="toolbar" />
                </template>
              </NavsearchPageTitleMobile>
            </slot>

            <slot v-bind="contextRx" />
          </div>
        </PageContent>
      </PageContentWrapper>
    </ViewWrapper>

    <slot v-bind="contextRx" name="extra" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.view-wrapper.has-top-nav) {
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
