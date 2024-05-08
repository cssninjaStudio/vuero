<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List View 1'
})

useHead({
  title: 'List View 1 - Sidebar - Vuero',
})
</script>

<template>
  <ViewListV1 />
</template>
