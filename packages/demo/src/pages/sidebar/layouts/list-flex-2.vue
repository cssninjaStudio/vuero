<script setup lang="ts">
type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List Flex 2'
})

useHead({
  title: 'List Flex 2 - Sidebar - Vuero',
})
</script>

<template>
  <FlexListV2 :active-tab="activeTab" />
</template>
