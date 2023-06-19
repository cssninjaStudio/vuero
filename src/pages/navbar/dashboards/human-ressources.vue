<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('HR Dashboard')

useHead({
  title: 'HR Dashboard - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <HumanRessourcesDashboard class="has-navbar-spacing" />
  </div>
</template>
