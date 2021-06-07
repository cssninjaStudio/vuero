<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Charts Apex'
useHead({
  title: 'Charts Apex - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ApexDashboard />
  </div>
</template>
