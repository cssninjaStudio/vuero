<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Kanban Board - Admin - Vuero',
})
</script>

<template>
  <KanbanDashboard />
</template>
