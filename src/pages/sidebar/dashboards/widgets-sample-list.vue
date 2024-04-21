<script setup lang="ts">
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
