<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { sidebarLayoutId, setLayout } from '/@src/state/sidebarLayoutState'

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
  <li>
    <a data-content="Config" @click="standardOpen = true">
      <i class="iconify sidebar-svg" data-icon="feather:sidebar"></i>
    </a>
    <V-Modal
      :open="standardOpen"
      title="Select Sidebar Layout"
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
              :class="[sidebarLayoutId === 'sidebar-default' && 'is-active']"
              @click="setLayout('sidebar-default')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[sidebarLayoutId === 'sidebar-color' && 'is-active']"
              @click="setLayout('sidebar-color')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[sidebarLayoutId === 'sidebar-curved' && 'is-active']"
              @click="setLayout('sidebar-curved')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[
                sidebarLayoutId === 'sidebar-color-curved' && 'is-active',
              ]"
              @click="setLayout('sidebar-color-curved')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[sidebarLayoutId === 'sidebar-labels' && 'is-active']"
              @click="setLayout('sidebar-labels')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[
                sidebarLayoutId === 'sidebar-labels-hover' && 'is-active',
              ]"
              @click="setLayout('sidebar-labels-hover')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[sidebarLayoutId === 'sidebar-float' && 'is-active']"
              @click="setLayout('sidebar-float')"
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
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
        </div>
      </template>
      <template #action>
        <V-Button :to="otherLayoutLink" color="primary">
          Switch to Navbar
        </V-Button>
      </template>
    </V-Modal>
  </li>
</template>
