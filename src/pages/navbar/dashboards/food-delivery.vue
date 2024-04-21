<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Apps 1')

useHead({
  title: 'Apps 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FoodDeliveryApp />
  </div>
</template>
