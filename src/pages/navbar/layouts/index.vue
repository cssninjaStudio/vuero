<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List View 1')

useHead({
  title: 'List View 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewListV1 />
  </div>
</template>
