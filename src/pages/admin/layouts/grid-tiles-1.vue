<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Grid Tiles 1 - Admin - Vuero',
})
</script>

<template>
  <div class="page-content is-relative">
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
        <h1 class="title is-4">Tile Grid</h1>
      </div>

      <Toolbar />
    </div>

    <div class="tile-grid-toolbar">
      <div class="control has-icon">
        <input
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".column"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="buttons">
        <div class="field h-hidden-mobile">
          <div class="control">
            <div class="h-select">
              <div class="select-box">
                <span>Filter</span>
              </div>
              <div class="select-icon">
                <i class="iconify" data-icon="feather:chevron-down"></i>
              </div>
              <div class="select-drop has-slimscroll-sm">
                <div class="drop-inner">
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>UI/UX Design</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Web Development</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Software Engineering</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Business</span>
                    </div>
                  </div>
                  <div class="option-row">
                    <input type="radio" name="grid_filter" />
                    <div class="option-meta">
                      <span>Product Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="button v-button is-primary is-raised">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>Add User</span>
        </button>
      </div>
    </div>

    <div class="page-content-inner">
      <TilesGridV1 />
    </div>
  </div>
</template>
