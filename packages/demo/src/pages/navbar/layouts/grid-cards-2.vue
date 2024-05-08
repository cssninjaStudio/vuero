<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Cards 2'
})

useHead({
  title: 'Grid Cards 2 - Navbar - Vuero',
})
</script>

<template>
  <CardsGridV2 />
</template>
