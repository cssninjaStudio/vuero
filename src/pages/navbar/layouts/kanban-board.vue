<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Kanban Board'
useHead({
  title: 'Kanban Board - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <KanbanApp />
  </div>
</template>
