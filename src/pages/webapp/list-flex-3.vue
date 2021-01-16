<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'active' | 'closed'>('active')

useTitle('List Flex 3 - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-project"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Flex Lists"
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
              <h1 class="title is-4">Flex Lists</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-flex-toolbar is-reversed is-webapp flex-list-v2">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".flex-table-item"
              />
              <div class="form-icon">
                <Icon icon="feather:search" />
              </div>
            </div>

            <div class="tabs-inner">
              <div class="tabs">
                <ul>
                  <li :class="[activeTab === 'active' && 'is-active']">
                    <a @click="activeTab = 'active'"><span>Active</span></a>
                  </li>
                  <li :class="[activeTab === 'closed' && 'is-active']">
                    <a @click="activeTab = 'closed'"><span>Closed</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner is-webapp">
            <FlexListV3 class="is-webapp" :active-tab="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
