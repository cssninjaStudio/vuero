<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Placeload List'
})

useHead({
  title: 'Placeload List - Navbar - Vuero',
})
</script>

<template>
  <PlaceloadV1 />
</template>
