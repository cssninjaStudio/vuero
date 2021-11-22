<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Cards 4')

useHead({
  title: 'Grid Cards 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CardsGridV4 />
  </div>
</template>
