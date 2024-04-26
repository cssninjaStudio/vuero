<script setup lang="ts">
useVueroContext({
  pageTitle: 'Search Results',
})

useHead({
  title: 'Search Results - Navbar - Vuero',
})
</script>

<template>
  <div class="is-navbar-lg">
    <FacetSearch />
  </div>
</template>
