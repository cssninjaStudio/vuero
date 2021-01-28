<script setup lang="ts">
import { ref } from 'vue'
import {
  adminLayoutId,
  setLayout,
} from '/@src/composition/state/ui/adminLayoutState'
const standardOpen = ref(false)
</script>

<template>
  <li>
    <a @click="standardOpen = true">
      <i class="iconify sidebar-svg" data-icon="feather:sidebar"></i>
    </a>
    <V-Modal
      :open="standardOpen"
      title="Select Admin Layout"
      actions="right"
      noscroll
      @close="standardOpen = false"
    >
      <template #content>
        <div class="columns is-multiline layout-selector">
          <div class="column is-6">
            <a
              href="#"
              class="layout-item"
              :class="[adminLayoutId === 'sidebar-default' && 'is-active']"
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
              :class="[adminLayoutId === 'sidebar-color' && 'is-active']"
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
              :class="[adminLayoutId === 'sidebar-curved' && 'is-active']"
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
              :class="[adminLayoutId === 'sidebar-color-curved' && 'is-active']"
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
              <p>The good old default sidebar</p>
              <div class="indicator">
                <i class="iconify" data-icon="feather:check"></i>
              </div>
            </a>
          </div>
        </div>
      </template>
    </V-Modal>
  </li>
</template>
