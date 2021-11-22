<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets UI')

useHead({
  title: 'Widgets UI - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsUI />
  </div>
</template>
