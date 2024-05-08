<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Action Page'
})

useHead({
  title: 'Action Page - Sidebar - Vuero',
})
</script>

<template>
  <ActionPageV1 />
</template>
