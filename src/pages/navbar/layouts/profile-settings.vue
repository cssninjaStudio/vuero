<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Profile Settings'
useHead({
  title: 'Profile Settings - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SettingsProfile />
  </div>
</template>
