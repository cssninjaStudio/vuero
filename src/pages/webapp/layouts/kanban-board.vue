<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Kanban Board - WebApp - Vuero',
})
</script>

<template>
  <KanbanDashboard />
</template>
