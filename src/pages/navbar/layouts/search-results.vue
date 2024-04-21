<script setup lang="ts">
useVueroContext({
  pageTitle: 'Search Results',
})

useHead({
  title: 'Search Results - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted is-navbar-lg"
  >
    <div class="page-content-inner">
      <FacetSearch />
    </div>
  </div>
</template>
