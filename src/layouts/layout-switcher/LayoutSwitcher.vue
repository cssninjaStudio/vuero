<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import {
  navbarLayoutId,
  navbarLayoutTheme,
} from '/@src/state/navbarLayoutState'
import { sidebarTheme } from '/@src/state/sidebarLayoutState'

const isModalOpen = ref(false)
const route = useRoute()

const isNavbarLayout = computed(() => {
  return route.fullPath.startsWith('/navbar/')
})
const isSidebarLayout = computed(() => {
  return route.fullPath.startsWith('/sidebar/')
})

const navbarLayoutLink = computed(() => {
  return route.fullPath.replace('sidebar', 'navbar')
})

const sidebarLayoutLink = computed(() => {
  return route.fullPath.replace('navbar', 'sidebar')
})

const hasDynamicLayout = computed(() => {
  return isNavbarLayout.value || isSidebarLayout.value
})

const selectedSlug = computed(() => {
  if (isSidebarLayout.value) {
    return 'sidebar'
  }

  switch (navbarLayoutId.value) {
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
  <div v-if="hasDynamicLayout">
    <a
      aria-label="Open layout switcher"
      class="icon-link"
      @click.passive="isModalOpen = true"
    >
      <i
        aria-hidden="true"
        class="iconify sidebar-svg"
        data-icon="feather:sidebar"
      ></i>
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-default' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-default'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-fade' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-fade'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-colored' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-colored'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-dropdown' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-dropdown'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-dropdown-colored' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-dropdown-colored'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-clean' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-clean'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-clean-center' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-clean-center'
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
                        :to="navbarLayoutLink"
                        class="layout-item"
                        :class="[
                          isNavbarLayout &&
                            navbarLayoutId === 'navbar-clean-fade' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            navbarLayoutId = 'navbar-clean-fade'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'default' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'default'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'color' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'color'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'curved' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'curved'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'color-curved' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'color-curved'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'labels' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'labels'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'labels-hover' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'labels-hover'
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
                        :to="sidebarLayoutLink"
                        class="layout-item"
                        :class="[
                          isSidebarLayout &&
                            sidebarTheme === 'float' &&
                            'is-active',
                        ]"
                        @click.passive="
                          () => {
                            sidebarTheme = 'float'
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
