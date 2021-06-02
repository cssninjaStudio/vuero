<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { navbarLayoutId } from '/@src/state/navbarLayoutState'

const standardOpen = ref(false)
const route = useRoute()

const otherLayoutLink = computed(() => {
  if (route.fullPath.startsWith('/sidebar')) {
    return route.fullPath.replace('sidebar', 'navbar')
  } else {
    return route.fullPath.replace('navbar', 'sidebar')
  }
})

const hasDynamicLayout = computed(() => {
  return (
    route.fullPath.startsWith('/sidebar/') ||
    route.fullPath.startsWith('/navbar/') ||
    route.fullPath.startsWith('/components/') ||
    route.fullPath.startsWith('/elements/')
  )
})
</script>

<template>
  <div v-if="hasDynamicLayout">
    <a class="icon-link" @click="standardOpen = true">
      <i class="iconify sidebar-svg" data-icon="feather:sidebar"></i>
    </a>
    <V-Modal
      :open="standardOpen"
      title="Select Navbar Layout"
      actions="right"
      noscroll
      @close="standardOpen = false"
    >
      <template #content>
        <div class="has-slimscroll layout-selector">
          <div class="columns is-multiline">
            <div class="column is-12 has-text-centered">
              <span class="is-size-5 has-text-grey">Default Navbar</span>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[navbarLayoutId === 'navbar-default' && 'is-active']"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-default'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[navbarLayoutId === 'navbar-fade' && 'is-active']"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-fade'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[navbarLayoutId === 'navbar-colored' && 'is-active']"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-colored'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="columns is-multiline pt-6">
            <div class="column is-12 has-text-centered">
              <span class="is-size-5 has-text-grey">Dropdown Navbar</span>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[navbarLayoutId === 'navbar-dropdown' && 'is-active']"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-dropdown'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[
                  navbarLayoutId === 'navbar-dropdown-colored' && 'is-active',
                ]"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-dropdown-colored'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
          </div>
          <div class="columns is-multiline pt-6">
            <div class="column is-12 has-text-centered">
              <span class="is-size-5 has-text-grey">Clean Navbar</span>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[navbarLayoutId === 'navbar-clean' && 'is-active']"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-clean'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[
                  navbarLayoutId === 'navbar-clean-center' && 'is-active',
                ]"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-clean-center'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
            <div class="column is-6">
              <a
                href="#"
                class="layout-item"
                :class="[navbarLayoutId === 'navbar-clean-fade' && 'is-active']"
                @click="
                  () => {
                    navbarLayoutId = 'navbar-clean-fade'
                    standardOpen = false
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
                  <i class="iconify" data-icon="feather:check"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </template>
      <template #action>
        <V-Button :to="otherLayoutLink" color="primary">
          Switch to Sidebar
        </V-Button>
      </template>
    </V-Modal>
  </div>
</template>
