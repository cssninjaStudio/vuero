<script setup lang="ts">
type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List Flex 3'
})

useHead({
  title: 'List Flex 3 - Sidebar - Vuero',
})
</script>

<template>
  <FlexListV3 :active-tab="activeTab" />
</template>
