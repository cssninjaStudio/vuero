<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Personal 2'
useHead({
  title: 'Personal 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PersonalDashboardV2 />
  </div>
</template>
