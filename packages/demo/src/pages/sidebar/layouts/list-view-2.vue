<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List View 2'
})

useHead({
  title: 'List View 2 - Sidebar - Vuero',
})
</script>

<template>
  <ViewListV2 />
</template>
