<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Utility Account Confirm - WebApp - Vuero',
})
</script>

<template>
  <WebappLayout>
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="app-onboarding"
      class="view-wrapper is-webapp"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-page-title="Confirm Account"
      data-naver-offset="214"
      data-menu-item="#layouts-navbar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered is-webapp">
            <div class="title-wrap">
              <h1 class="title is-4">Confirm Account</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <ConfirmAccount />
          </div>
        </div>
      </div>
    </div>
  </WebappLayout>
</template>
