<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'all' | 'saved'>('all')

onMounted(() => {
  activeSidebar.value = 'none'
})

useTitle('List View 3 - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-list"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
        >
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

          <div class="list-view-toolbar is-reversed">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".list-view-item"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="tabs-inner">
              <div class="tabs">
                <ul>
                  <li :class="[activeTab === 'all' && 'is-active']">
                    <a @click="activeTab = 'all'"><span>All</span></a>
                  </li>
                  <li :class="[activeTab === 'saved' && 'is-active']">
                    <a @click="activeTab = 'saved'"><span>Saved</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner">
            <ViewListV3 :active-tab="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
