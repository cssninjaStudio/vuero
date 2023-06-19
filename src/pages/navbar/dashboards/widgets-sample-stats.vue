<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets Stats')

useHead({
  title: 'Widgets Stats - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsStats />
  </div>
</template>
