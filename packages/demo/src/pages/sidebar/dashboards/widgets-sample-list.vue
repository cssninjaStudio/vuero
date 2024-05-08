<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Widgets List'
})

useHead({
  title: 'Widgets List - Sidebar - Vuero',
})
</script>

<template>
  <WidgetsList />
</template>
