<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Table List 2')

useHead({
  title: 'Table List 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV2 />
  </div>
</template>
