<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Cards 1')

useHead({
  title: 'Grid Cards 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV1 />
  </div>
</template>
