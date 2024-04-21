<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List View 3')

useHead({
  title: 'List View 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <ViewListV3 />
    </div>
  </div>
</template>
