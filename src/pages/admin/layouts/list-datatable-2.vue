<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'List Datatable 2 - Admin - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('layouts')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">Datatable</h1>
      </div>

      <Toolbar />
    </div>

    <div class="datatable-toolbar">
      <div class="field has-addons is-disabled">
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-bolt"></i>
            </span>
            <span>Disable</span>
          </button>
        </p>
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
            <span>Delete</span>
          </button>
        </p>
        <p class="control">
          <button class="button v-button">
            <span class="icon is-small">
              <i class="fas fa-file"></i>
            </span>
            <span>Report</span>
          </button>
        </p>
      </div>

      <div class="buttons">
        <button class="button v-button is-primary is-elevated">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>Add Product</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner">
      <DatatableV2 />
    </div>
  </div>
</template>
