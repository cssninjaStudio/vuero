<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Food Delivery App'
})

useHead({
  title: 'Food Delivery App - Sidebar - Vuero',
})
</script>

<template>
  <FoodDeliveryApp />
</template>
