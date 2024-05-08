<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Settings'
})

useHead({
  title: 'Profile Settings - Sidebar - Vuero',
})
</script>

<template>
  <SettingsProfile />
</template>
