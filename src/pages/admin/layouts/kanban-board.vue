<script setup lang="ts">
import { useHead } from '@vueuse/head'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

useHead({
  title: 'Kanban Board - Admin - Vuero',
})
</script>

<template>
  <KanbanDashboard />
</template>
