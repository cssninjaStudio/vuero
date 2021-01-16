<script setup lang="ts">
import { useTitle } from '@vueuse/core'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

const activeTab = ref<'all' | 'people' | 'records'>('all')

useTitle('Search Empty - WebApp - Vuero')
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-search"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="214"
      data-page-title="Empty Search"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div
          class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
        >
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Empty Search</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner is-webapp">
            <EmptySearch class="is-webapp" />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
