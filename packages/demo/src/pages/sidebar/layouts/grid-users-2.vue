<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Users 2'
})

useHead({
  title: 'Grid Users 2 - Sidebar - Vuero',
})
</script>

<template>
  <UsersGridV2 />
</template>
