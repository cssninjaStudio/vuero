<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Kanban Board'
})

useHead({
  title: 'Kanban Board - Sidebar - Vuero',
})
</script>

<template>
  <KanbanApp />
</template>
