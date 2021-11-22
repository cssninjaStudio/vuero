<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Charts BillboardJS')

useHead({
  title: 'Charts BillboardJS - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <BillboardJsDashboard />
  </div>
</template>
