<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'List Flex 1'
useHead({
  title: 'List Flex 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlexListV1 />
  </div>
</template>
