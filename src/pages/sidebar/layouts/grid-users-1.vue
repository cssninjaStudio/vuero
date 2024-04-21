<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Users 1')

useHead({
  title: 'Grid Users 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV1 />
  </div>
</template>
