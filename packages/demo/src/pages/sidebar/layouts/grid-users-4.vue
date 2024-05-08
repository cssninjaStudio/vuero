<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Users 4'
})

useHead({
  title: 'Grid Users 4 - Sidebar - Vuero',
})
</script>

<template>
  <UsersGridV4 />
</template>
