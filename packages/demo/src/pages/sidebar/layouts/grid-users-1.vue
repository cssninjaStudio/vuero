<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Users 1'
})

useHead({
  title: 'Grid Users 1 - Sidebar - Vuero',
})
</script>

<template>
  <UsersGridV1 />
</template>
