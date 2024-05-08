<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Cards 1'
})

useHead({
  title: 'Grid Cards 1 - Navbar - Vuero',
})
</script>

<template>
  <CardsGridV1 />
</template>
