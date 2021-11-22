<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Action Page 1')

useHead({
  title: 'Action Page 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ActionPageV1 />
  </div>
</template>
