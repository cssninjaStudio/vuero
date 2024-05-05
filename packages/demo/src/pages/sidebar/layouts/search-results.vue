<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Search Results'
})

useHead({
  title: 'Search Results - Sidebar - Vuero',
})
</script>

<template>
  <FacetSearch />
</template>
