<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Utility Invoice')

useHead({
  title: 'Utility Invoice - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Invoice />
  </div>
</template>
