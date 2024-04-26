<script setup lang="ts">
type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

useVueroContext({
  pageTitle: 'Grid Users 3',
})

useHead({
  title: 'Grid Users 3 - Sidebar - Vuero',
})
</script>

<template>
  <UsersGridV3 :active-tab="activeTab" />
</template>
