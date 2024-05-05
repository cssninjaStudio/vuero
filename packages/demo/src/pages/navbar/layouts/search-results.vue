<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Search Results'
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
