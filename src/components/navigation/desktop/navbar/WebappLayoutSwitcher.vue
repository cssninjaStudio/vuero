<script setup lang="ts">
import { ref } from 'vue'
import {
  webappLayoutId,
  setLayout,
} from '/@src/composition/state/webappLayoutState'
const standardOpen = ref(false)
</script>

<template>
  <div>
    <a class="icon-link" @click="standardOpen = true">
      <i class="iconify sidebar-svg" data-icon="feather:sidebar"></i>
    </a>
    <V-Modal
      :open="standardOpen"
      title="Select Webapp Layout"
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
              :class="[webappLayoutId === 'webapp-v1' && 'is-active']"
              @click="setLayout('webapp-v1')"
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
              :class="[webappLayoutId === 'webapp-v2' && 'is-active']"
              @click="setLayout('webapp-v2')"
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
              :class="[webappLayoutId === 'webapp-v3' && 'is-active']"
              @click="setLayout('webapp-v3')"
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
              :class="[webappLayoutId === 'webapp-v4' && 'is-active']"
              @click="setLayout('webapp-v4')"
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
              :class="[webappLayoutId === 'webapp-v5' && 'is-active']"
              @click="setLayout('webapp-v5')"
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
              :class="[webappLayoutId === 'webapp-v6' && 'is-active']"
              @click="setLayout('webapp-v6')"
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
              :class="[webappLayoutId === 'webapp-v7' && 'is-active']"
              @click="setLayout('webapp-v7')"
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
              :class="[webappLayoutId === 'webapp-v8' && 'is-active']"
              @click="setLayout('webapp-v8')"
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
    </V-Modal>
  </div>
</template>
