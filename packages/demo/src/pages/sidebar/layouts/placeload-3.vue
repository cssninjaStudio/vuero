<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Placeload Grid'
})

useHead({
  title: 'Placeload Grid - Sidebar - Vuero',
})
</script>

<template>
  <PlaceloadV3 />
</template>
