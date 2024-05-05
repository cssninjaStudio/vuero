<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Apps 1'
})

useHead({
  title: 'Apps 1 - Navbar - Vuero',
})
</script>

<template>
  <FoodDeliveryApp />
</template>
