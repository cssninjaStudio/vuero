<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'active' | 'inactive'>('active')

useHead({
  title: 'List View 4 - WebApp - Vuero',
})
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-lists"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="List View"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">List View</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-view-toolbar is-webapp is-reversed">
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

          <div class="page-content-inner is-webapp">
            <ViewListV4 :active-tab="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
