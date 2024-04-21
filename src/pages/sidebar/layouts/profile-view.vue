<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile View')

useHead({
  title: 'Profile View - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewProfile />
  </div>
</template>
