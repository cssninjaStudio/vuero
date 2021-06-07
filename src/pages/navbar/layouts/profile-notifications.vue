<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Profile Notification'
useHead({
  title: 'Profile Notification - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <NotificationPage />
  </div>
</template>
