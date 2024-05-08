<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Utility Promotion'
})

useHead({
  title: 'Utility Promotion - Sidebar - Vuero',
})
</script>

<template>
  <Promotion />
</template>
