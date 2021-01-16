<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'all' | 'team'>('all')

useTitle('Grid Users 3 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="grid-users"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="User Grids"
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
              <h1 class="title is-4">User Grid</h1>
            </div>

            <Toolbar />
          </div>

          <div class="user-grid-toolbar is-reversed is-webapp">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".column"
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
                  <li :class="[activeTab === 'team' && 'is-active']">
                    <a @click="activeTab = 'team'"><span>Team</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <UsersGridV3 />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
