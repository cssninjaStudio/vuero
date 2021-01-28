<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')

useHead({
  title: 'List View 2 - Admin - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
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
        <h1 class="title is-4">List View</h1>
      </div>

      <Toolbar />
    </div>

    <div class="list-view-toolbar">
      <div class="control has-icon">
        <input
          class="input custom-text-filter"
          placeholder="Search..."
          data-filter-target=".list-view-item"
        />
        <div class="form-icon">
          <i class="iconify" data-icon="feather:search"></i>
        </div>
      </div>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'active' && 'is-active']">
              <a @click="activeTab = 'active'"><span>Active</span></a>
            </li>
            <li :class="[activeTab === 'inactive' && 'is-active']">
              <a @click="activeTab = 'inactive'"><span>Inactive</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-content-inner">
      <ViewListV2 :active-tab="activeTab" />
    </div>
  </div>
</template>
