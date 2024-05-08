<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Edit 3'
})

useHead({
  title: 'Profile Edit 3 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSkills />
</template>
