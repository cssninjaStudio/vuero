<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Utility Promotion')

useHead({
  title: 'Utility Promotion - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Promotion />
  </div>
</template>
