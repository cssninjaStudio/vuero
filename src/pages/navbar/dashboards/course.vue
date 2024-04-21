<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Business 4')

useHead({
  title: 'Business 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CourseDashboard />
  </div>
</template>
