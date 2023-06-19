<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Widgets List')

useHead({
  title: 'Widgets List - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsList />
  </div>
</template>
