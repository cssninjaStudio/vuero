<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'

const layoutSwitcher = useLayoutSwitcher()
const isModalOpen = ref(false)

const selectedSlug = computed(() => {
  switch (layoutSwitcher.dynamicLayoutId) {
    case 'navbar-dropdown':
    case 'navbar-dropdown-colored':
      return 'dropdown'
    case 'navbar-clean':
    case 'navbar-clean-center':
    case 'navbar-clean-fade':
      return 'search'
    case 'navbar-default':
    case 'navbar-fade':
    case 'navbar-colored':
      return 'navbar'
    case 'sideblock-default':
    case 'sideblock-color':
    case 'sideblock-color-curved':
    case 'sideblock-curved':
      return 'sideblock'
    default:
      return 'sidebar'
  }
})

const layoutComponent = (slug: string) => {
  switch (slug) {
    case 'dropdown':
      return 'NavbarDropdownLayout'
    case 'search':
      return 'NavbarSearchLayout'
    case 'sidebar':
      return 'SidebarLayout'
    case 'sideblock':
      return 'SideblockLayout'
    case 'navbar':
    default:
      return 'NavbarLayout'
  }
}
</script>

<template>
  <div v-if="layoutSwitcher.hasDynamicLayout">
    <a
      aria-label="Open layout switcher"
      class="icon-link"
      tabindex="0"
      @keydown.space.prevent="isModalOpen = true"
      @click.passive="isModalOpen = true"
    >
      <i aria-hidden="true" class="iconify sidebar-svg" data-icon="feather:sidebar"></i>
    </a>
    <VModal
      :open="isModalOpen"
      title="Select Layout"
      size="medium"
      actions="right"
      noscroll
      tabs
      @close="isModalOpen = false"
    >
      <template #content>
        <VTabs
          :selected="selectedSlug"
          :tabs="[
            { label: 'Navbar', value: 'navbar' },
            {
              label: 'Navdrop',
              value: 'dropdown',
            },
            {
              label: 'Search',
              value: 'search',
            },
            { label: 'Sidebar', value: 'sidebar' },
            { label: 'Sideblock', value: 'sideblock' },
          ]"
        >
          <template #tab="{ activeValue }">
            <div>
              <div class="has-slimscroll layout-selector">
                <Transition name="fade-fast" mode="out-in">
                  <div
                    v-if="activeValue === 'navbar'"
                    class="columns is-multiline is-half-mobile-p"
                  >
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-default' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-default')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-default')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-7.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-7-dark.svg"
                          alt=""
                        />
                        <h3>Default theme</h3>
                        <p>Top nav with categories</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-fade' && 'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-fade')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-fade')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-8.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-8-dark.svg"
                          alt=""
                        />
                        <h3>Fade theme</h3>
                        <p>Transparent top nav</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-colored' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-colored')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-colored')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-9.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-9-dark.svg"
                          alt=""
                        />
                        <h3>Colored theme</h3>
                        <p>Colored top nav</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                  <div
                    v-else-if="activeValue === 'dropdown'"
                    class="columns is-multiline is-half-mobile-p"
                  >
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-dropdown' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-dropdown')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-dropdown')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-7.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-7-dark.svg"
                          alt=""
                        />
                        <h3>Default theme</h3>
                        <p>Top nav dropdown variation</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-dropdown-colored' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-dropdown-colored')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-dropdown-colored')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-9.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-9-dark.svg"
                          alt=""
                        />
                        <h3>Colored theme</h3>
                        <p>Colored with dropdowns</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                  <div
                    v-else-if="activeValue === 'search'"
                    class="columns is-multiline is-half-mobile-p"
                  >
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-clean' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-clean')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-clean')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-10.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-10-dark.svg"
                          alt=""
                        />
                        <h3>Default theme</h3>
                        <p>Clean top nav variation</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-clean-center' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-clean-center')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-clean-center')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-11.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-11-dark.svg"
                          alt=""
                        />
                        <h3>Center theme</h3>
                        <p>Centered variation</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'navbar-clean-fade' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-clean-fade')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('navbar-clean-fade')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-12.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-12-dark.svg"
                          alt=""
                        />
                        <h3>Fade theme</h3>
                        <p>Transparent variation</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                  <div
                    v-else-if="activeValue === 'sidebar'"
                    class="columns is-multiline is-half-mobile-p"
                  >
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-default' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-default')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-default')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-1.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-1-dark.svg"
                          alt=""
                        />
                        <h3>Default Sidebar</h3>
                        <p>The good old default sidebar</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-color' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-color')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-color')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-2.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-2-dark.svg"
                          alt=""
                        />
                        <h3>Colored Sidebar</h3>
                        <p>Colored variation of sidebar</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-curved' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-curved')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-curved')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-3.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-3-dark.svg"
                          alt=""
                        />
                        <h3>Curved Sidebar</h3>
                        <p>Sidebar with curved edges</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-color-curved' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-color-curved')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-color-curved')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-4.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-4-dark.svg"
                          alt=""
                        />
                        <h3>Curved Colored</h3>
                        <p>Curved edges with color</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-labels' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-labels')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-labels')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-5.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-5-dark.svg"
                          alt=""
                        />
                        <h3>Sidebar Labels</h3>
                        <p>Default labels displayed</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-labels-hover' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-labels-hover')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-labels-hover')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-5.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-5-dark.svg"
                          alt=""
                        />
                        <h3>Hover Labels</h3>
                        <p>Labels displayed on hover</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.dynamicLayoutId === 'sidebar-float' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-float')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sidebar-float')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-6.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-6-dark.svg"
                          alt=""
                        />
                        <h3>Floating Sidebar</h3>
                        <p>Floating rounded variation</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                  <div
                    v-else-if="activeValue === 'sideblock'"
                    class="columns is-multiline is-half-mobile-p"
                  >
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.isSidebarRoute &&
                            layoutSwitcher.dynamicLayoutId === 'sideblock-default' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-default')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-default')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-13.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-13-dark.svg"
                          alt=""
                        />
                        <h3>Default Sideblock</h3>
                        <p>The good old default sideblock</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.isSidebarRoute &&
                            layoutSwitcher.dynamicLayoutId === 'sideblock-color' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-color')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-color')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-15.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-15-dark.svg"
                          alt=""
                        />
                        <h3>Colored Sideblock</h3>
                        <p>Colored variation of sideblock</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.isSidebarRoute &&
                            layoutSwitcher.dynamicLayoutId === 'sideblock-curved' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-curved')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-curved')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-14.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-14-dark.svg"
                          alt=""
                        />
                        <h3>Curved Sideblock</h3>
                        <p>Sideblock with curved edges</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.isSidebarRoute &&
                            layoutSwitcher.dynamicLayoutId === 'sideblock-color-curved' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-color-curved')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setDynamicLayoutId('sideblock-color-curved')
                            isModalOpen = false
                          }
                        "
                      >
                        <img
                          class="light-image-block"
                          src="/images/icons/layouts/layout-16.svg"
                          alt=""
                        />
                        <img
                          class="dark-image-block"
                          src="/images/icons/layouts/layout-16-dark.svg"
                          alt=""
                        />
                        <h3>Curved Colored</h3>
                        <p>Curved edges with color</p>
                        <div class="indicator">
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:check"
                          ></i>
                        </div>
                      </RouterLink>
                    </div>
                  </div>
                </Transition>
              </div>

              <VMessage>
                Use this layout with
                <code>{{ layoutComponent(activeValue) }}</code> component
              </VMessage>
            </div>
          </template>
        </VTabs>
      </template>
    </VModal>
  </div>
</template>
