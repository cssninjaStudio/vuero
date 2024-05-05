<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Utility Invoice'
})

useHead({
  title: 'Utility Invoice - Sidebar - Vuero',
})
</script>

<template>
  <Invoice />
</template>
