<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Edit 1'
})

useHead({
  title: 'Profile Edit 1 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileGeneral />
</template>
