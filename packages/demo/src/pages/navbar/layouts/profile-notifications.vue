<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Notification'
})

useHead({
  title: 'Profile Notification - Navbar - Vuero',
})
</script>

<template>
  <NotificationPage />
</template>
