<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'active' | 'closed'>('active')

onMounted(() => {
  activeSidebar.value = 'none'
})

useHead({
  title: 'List Flex 2 - Admin - Vuero',
})
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
              <h1 class="title is-4">Flex Lists</h1>
            </div>

            <Toolbar />
          </div>

          <div class="list-flex-toolbar is-reversed">
            <div class="control has-icon">
              <input
                class="input custom-text-filter"
                placeholder="Search..."
                data-filter-target=".flex-table-item"
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
                  <li :class="[activeTab === 'closed' && 'is-active']">
                    <a @click="activeTab = 'closed'"><span>Closed</span></a>
                  </li>
                  <li class="tab-naver"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="page-content-inner">
            <FlexListV2 :active-tab="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
