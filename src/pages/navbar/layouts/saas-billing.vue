<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Saas Billing')

useHead({
  title: 'Saas Billing - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SaasBillingApp />
  </div>
</template>
