<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'

const layoutSwitcher = useLayoutSwitcher()
const isModalOpen = ref(false)

const selectedSlug = computed(() => {
  if (layoutSwitcher.isSidebarLayout) {
    return 'sidebar'
  }

  switch (layoutSwitcher.navbarLayoutId) {
    case 'navbar-dropdown':
    case 'navbar-dropdown-colored':
      return 'dropdown'
    case 'navbar-clean':
    case 'navbar-clean-center':
    case 'navbar-clean-fade':
      return 'search'
    default:
      return 'navbar'
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
          ]"
        >
          <template #tab="{ activeValue }">
            <div>
              <div class="has-slimscroll layout-selector">
                <transition name="fade-fast" mode="out-in">
                  <div
                    v-if="activeValue === 'navbar'"
                    class="columns is-multiline is-half-mobile-p"
                  >
                    <div class="column is-6">
                      <RouterLink
                        :to="layoutSwitcher.navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-default' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-default')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-default')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-fade' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-fade')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-fade')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-colored' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-colored')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-colored')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-dropdown' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-dropdown')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-dropdown')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-dropdown-colored' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-dropdown-colored')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-dropdown-colored')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-clean' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-clean')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-clean')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-clean-center' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-clean-center')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-clean-center')
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
                          layoutSwitcher.isNavbarLayout &&
                            layoutSwitcher.navbarLayoutId === 'navbar-clean-fade' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-clean-fade')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setNavbarLayoutId('navbar-clean-fade')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'default' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('default')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('default')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'color' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('color')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('color')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'curved' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('curved')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('curved')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'color-curved' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('color-curved')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('color-curved')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'labels' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('labels')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('labels')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'labels-hover' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('labels-hover')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('labels-hover')
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
                          layoutSwitcher.isSidebarLayout &&
                            layoutSwitcher.sidebarTheme === 'float' &&
                            'is-active',
                        ]"
                        @keydown.space.prevent="
                          () => {
                            layoutSwitcher.setSidebarTheme('float')
                            isModalOpen = false
                          }
                        "
                        @click.passive="
                          () => {
                            layoutSwitcher.setSidebarTheme('float')
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
                </transition>
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
