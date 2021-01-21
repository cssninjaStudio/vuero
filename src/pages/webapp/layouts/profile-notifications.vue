<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Profile Notification - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Notifications</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner is-webapp">
      <NotificationPage />
    </div>
  </div>
</template>
