<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Placeload Table')

useHead({
  title: 'Placeload Table - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <PlaceloadV2 />
  </div>
</template>
