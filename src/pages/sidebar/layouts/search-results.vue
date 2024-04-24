<script setup lang="ts">
useVueroContext({
  pageTitle: 'Search Results',
})

useHead({
  title: 'Search Results - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FacetSearch />
  </div>
</template>
