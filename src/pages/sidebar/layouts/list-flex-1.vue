<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'List Flex 1'
useHead({
  title: 'List Flex 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlexListV1 />
  </div>
</template>
