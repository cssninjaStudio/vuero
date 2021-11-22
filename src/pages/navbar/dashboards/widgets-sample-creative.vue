<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets Creative')

useHead({
  title: 'Widgets Creative - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsCreative />
  </div>
</template>
