<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Settings'
})

useHead({
  title: 'Profile Settings - Navbar - Vuero',
})
</script>

<template>
  <SettingsProfile />
</template>
