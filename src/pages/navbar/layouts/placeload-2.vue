<script setup lang="ts">
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
