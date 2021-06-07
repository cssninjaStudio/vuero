<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Saas Billing'
useHead({
  title: 'Saas Billing - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SaasBillingApp />
  </div>
</template>
