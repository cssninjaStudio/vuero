<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Placeload Table'
})

useHead({
  title: 'Placeload Table - Sidebar - Vuero',
})
</script>

<template>
  <PlaceloadV2 />
</template>
