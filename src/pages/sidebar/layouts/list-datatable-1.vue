<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Table List 1')

useHead({
  title: 'Table List 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV1 />
  </div>
</template>
