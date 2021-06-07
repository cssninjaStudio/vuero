<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Charts BillboardJS'
useHead({
  title: 'Charts BillboardJS - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BillboardJsDashboard />
  </div>
</template>
