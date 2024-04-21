<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List View 2')

useHead({
  title: 'List View 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <ViewListV2 />
    </div>
  </div>
</template>
