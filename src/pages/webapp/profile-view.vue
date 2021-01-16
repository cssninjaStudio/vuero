<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useTitle('Profile View - WebApp - Vuero')
</script>

<template>
  <WebappV2Layout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="user-profile"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="User Profile"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">User Profile</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner is-webapp">
            <ViewProfile class="is-webapp" />
          </div>
        </div>
      </div>
    </div>
  </WebappV2Layout>
</template>
