<script setup lang="ts">
type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

useVueroContext({
  pageTitle: 'List Flex 2',
})

useHead({
  title: 'List Flex 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FlexListV2 :active-tab="activeTab" />
  </div>
</template>
