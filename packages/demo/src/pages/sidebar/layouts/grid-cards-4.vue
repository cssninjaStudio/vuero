<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Cards 4'
})

useHead({
  title: 'Grid Cards 4 - Sidebar - Vuero',
})
</script>

<template>
  <CardsGridV4 />
</template>
