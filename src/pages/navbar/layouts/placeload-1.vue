<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Placeload List')

useHead({
  title: 'Placeload List - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV1 />
  </div>
</template>
