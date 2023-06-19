<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Cards 3')

useHead({
  title: 'Grid Cards 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV3 />
  </div>
</template>
