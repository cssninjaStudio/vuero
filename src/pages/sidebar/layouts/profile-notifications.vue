<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Profile Notifications'
useHead({
  title: 'Profile Notifications - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <NotificationPage />
  </div>
</template>
