<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Soccer')

useHead({
  title: 'Soccer - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <SoccerDashboard />
  </div>
</template>
