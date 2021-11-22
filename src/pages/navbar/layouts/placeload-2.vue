<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Placeload Table')

useHead({
  title: 'Placeload Table - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV2 />
  </div>
</template>
