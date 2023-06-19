<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Cards 1')

useHead({
  title: 'Grid Cards 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV1 />
  </div>
</template>
