<script setup lang="ts">
type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')

useVueroContext({
  pageTitle: 'List View 4',
})

useHead({
  title: 'List View 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <ViewListV4 :active-tab="activeTab" />
    </div>
  </div>
</template>
