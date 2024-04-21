<script setup lang="ts">
useVueroContext({
  pageTitle: 'Search Results',
})

useHead({
  title: 'Search Results - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-triple-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FacetSearch />
    </div>
  </div>
</template>
