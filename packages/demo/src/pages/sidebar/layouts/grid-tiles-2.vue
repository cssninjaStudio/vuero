<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Tiles 2'
})

useHead({
  title: 'Grid Tiles 2 - Sidebar - Vuero',
})
</script>

<template>
  <TilesGridV2 />
</template>
