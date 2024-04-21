<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Food Delivery App')

useHead({
  title: 'Food Delivery App - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FoodDeliveryApp />
  </div>
</template>
