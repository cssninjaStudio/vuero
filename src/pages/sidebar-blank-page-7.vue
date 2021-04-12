<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

useHead({
  title: 'Blank Page 7 - Sidebar - Vuero',
})
</script>

<template>
  <SidebarFloatLayout>
    <!-- Sidebar -->
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="vuero-hamburger nav-trigger push-resize"
              @click="toggleSidebar('home')"
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

            <!-- Page title -->
            <div class="title-wrap">
              <h1 class="title is-4">Blank Page 7 - Sidebar</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!-- Page content goes here -->
          </div>
        </div>
      </div>
    </div>
  </SidebarFloatLayout>
</template>
