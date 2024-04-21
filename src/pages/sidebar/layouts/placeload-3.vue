<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Placeload Grid')

useHead({
  title: 'Placeload Grid - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV3 />
  </div>
</template>
