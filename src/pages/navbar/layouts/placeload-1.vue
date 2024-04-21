<script setup lang="ts">
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
