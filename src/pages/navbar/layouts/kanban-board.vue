<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

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
