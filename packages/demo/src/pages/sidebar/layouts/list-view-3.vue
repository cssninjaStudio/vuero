<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List View 3'
})

useHead({
  title: 'List View 3 - Sidebar - Vuero',
})
</script>

<template>
  <ViewListV3 />
</template>
