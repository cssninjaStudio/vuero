<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Placeload Tiles')

useHead({
  title: 'Placeload Tiles - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV4 />
  </div>
</template>
