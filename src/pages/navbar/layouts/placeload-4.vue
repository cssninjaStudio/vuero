<script setup lang="ts">
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
