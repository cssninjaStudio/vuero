<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Action Page 2')

useHead({
  title: 'Action Page 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ActionPageV2 />
  </div>
</template>
