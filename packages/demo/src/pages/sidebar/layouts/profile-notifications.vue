<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Profile Notifications'
})

useHead({
  title: 'Profile Notifications - Sidebar - Vuero',
})
</script>

<template>
  <NotificationPage />
</template>
