<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Search Empty'
})

useHead({
  title: 'Search Empty - Sidebar - Vuero',
})
</script>

<template>
  <EmptySearch />
</template>
