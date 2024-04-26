<script setup lang="ts">
type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

useVueroContext({
  pageTitle: 'List Flex 2',
})

useHead({
  title: 'List Flex 2 - Navbar - Vuero',
})
</script>

<template>
  <FlexListV2
    class="is-navbar"
    :active-tab="activeTab"
  />
</template>
