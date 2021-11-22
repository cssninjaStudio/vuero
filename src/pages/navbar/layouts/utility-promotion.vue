<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Utility Promotion')

useHead({
  title: 'Utility Promotion - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Promotion />
  </div>
</template>
