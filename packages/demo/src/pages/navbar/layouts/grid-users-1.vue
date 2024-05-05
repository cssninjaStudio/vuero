<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Users 1'
})

useHead({
  title: 'Grid Users 1 - Navbar - Vuero',
})
</script>

<template>
  <UsersGridV1 />
</template>
