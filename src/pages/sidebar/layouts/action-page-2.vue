<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Action Page 2')

useHead({
  title: 'Action Page 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ActionPageV2 />
  </div>
</template>
