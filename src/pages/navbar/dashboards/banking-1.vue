<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Banking 1'
useHead({
  title: 'Banking 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BankingDashboardV1 />
  </div>
</template>
