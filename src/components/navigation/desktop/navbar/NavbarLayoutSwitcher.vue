<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { navbarLayoutId, setLayout } from '/@src/state/navbarLayoutState'

const standardOpen = ref(false)
const route = useRoute()

const otherLayoutLink = computed(() => {
  if (route.fullPath.startsWith('/sidebar')) {
    return route.fullPath.replace('sidebar', 'navbar')
  } else {
    return route.fullPath.replace('navbar', 'sidebar')
  }
})
</script>

<template>
  <div>
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
        <div class="columns is-multiline layout-selector has-slimscroll">
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[navbarLayoutId === 'navbar-default' && 'is-active']"
              @click="setLayout('navbar-default')"
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
              <h3>Default Navbar</h3>
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
              @click="setLayout('navbar-fade')"
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
              <h3>Fade Navbar</h3>
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
              @click="setLayout('navbar-colored')"
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
              <h3>Colored Navbar</h3>
              <p>Colored top nav</p>
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[navbarLayoutId === 'navbar-alt' && 'is-active']"
              @click="setLayout('navbar-alt')"
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
              <h3>Dropdown Navbar</h3>
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
              :class="[navbarLayoutId === 'navbar-alt-colored' && 'is-active']"
              @click="setLayout('navbar-alt-colored')"
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
              <h3>Colored Dropdown</h3>
              <p>Colored with dropdowns</p>
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[navbarLayoutId === 'navbar-clean' && 'is-active']"
              @click="setLayout('navbar-clean')"
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
              <h3>Clean Navbar</h3>
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
              :class="[navbarLayoutId === 'navbar-clean-center' && 'is-active']"
              @click="setLayout('navbar-clean-center')"
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
              <h3>Clean Centered</h3>
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
              @click="setLayout('navbar-clean-fade')"
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
              <h3>Clean Transparent</h3>
              <p>Transparent variation</p>
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
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
