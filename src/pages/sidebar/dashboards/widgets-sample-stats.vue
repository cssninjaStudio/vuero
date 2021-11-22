<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets Stats')

useHead({
  title: 'Widgets Stats - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsStats />
  </div>
</template>
