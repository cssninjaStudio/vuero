<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Placeload Tiles'
})

useHead({
  title: 'Placeload Tiles - Navbar - Vuero',
})
</script>

<template>
  <PlaceloadV4 />
</template>
