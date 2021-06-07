<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Banking 2'
useHead({
  title: 'Banking 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV2 />
  </div>
</template>
