<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List Flex 1')

useHead({
  title: 'List Flex 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlexListV1 />
  </div>
</template>
