<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Kanban Board'
useHead({
  title: 'Kanban Board - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <KanbanApp />
  </div>
</template>
