<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/navbarLayoutState'

type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')

pageTitle.value = 'List View 4'
useHead({
  title: 'List View 4 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="
      page-content
      is-relative
      tabs-wrapper
      is-slider is-squared is-inverted is-navbar-lg
    "
  >
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div class="vuero-hamburger nav-trigger push-resize">
        <span class="menu-toggle has-chevron">
          <span class="icon-box-toggle">
            <span class="rotate">
              <i aria-hidden="true" class="icon-line-top"></i>
              <i aria-hidden="true" class="icon-line-center"></i>
              <i aria-hidden="true" class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">List View</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <ViewListV4 />
    </div>
  </div>
</template>
