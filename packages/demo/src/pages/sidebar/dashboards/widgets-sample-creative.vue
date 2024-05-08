<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Widgets Creative'
})

useHead({
  title: 'Widgets Creative - Sidebar - Vuero',
})
</script>

<template>
  <WidgetsCreative />
</template>
