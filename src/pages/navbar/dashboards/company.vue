<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Business 2'
useHead({
  title: 'Business 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CompanyDashboard />
  </div>
</template>
