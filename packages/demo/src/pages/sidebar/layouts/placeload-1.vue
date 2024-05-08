<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Placeload List'
})

useHead({
  title: 'Placeload List - Sidebar - Vuero',
})
</script>

<template>
  <PlaceloadV1 />
</template>
