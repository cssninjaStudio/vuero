<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Tiles 1'
})

useHead({
  title: 'Grid Tiles 1 - Navbar - Vuero',
})
</script>

<template>
  <TilesGridV1 />
</template>
