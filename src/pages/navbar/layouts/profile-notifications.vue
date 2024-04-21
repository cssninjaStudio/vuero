<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile Notification')

useHead({
  title: 'Profile Notification - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <NotificationPage />
  </div>
</template>
