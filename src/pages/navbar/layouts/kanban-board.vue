<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Kanban Board')

useHead({
  title: 'Kanban Board - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <KanbanApp />
  </div>
</template>
