<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Profile Settings'
useHead({
  title: 'Profile Settings - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SettingsProfile />
  </div>
</template>
