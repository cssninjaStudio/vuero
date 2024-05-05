<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Kanban Board'
})

useHead({
  title: 'Kanban Board - Navbar - Vuero',
})
</script>

<template>
  <KanbanApp />
</template>
