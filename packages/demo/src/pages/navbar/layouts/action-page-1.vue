<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Action Page 1'
})

useHead({
  title: 'Action Page 1 - Navbar - Vuero',
})
</script>

<template>
  <ActionPageV1 />
</template>
