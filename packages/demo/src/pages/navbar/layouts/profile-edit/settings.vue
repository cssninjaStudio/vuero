<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Edit 4'
})

useHead({
  title: 'Profile Edit 4 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSettings />
</template>
