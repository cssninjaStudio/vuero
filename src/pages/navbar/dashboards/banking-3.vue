<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Banking 3'
useHead({
  title: 'Banking 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV3 />
  </div>
</template>
