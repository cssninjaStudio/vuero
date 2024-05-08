<script setup lang="ts">
type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Grid Users 3'
})

useHead({
  title: 'Grid Users 3 - Navbar - Vuero',
})
</script>

<template>
  <UsersGridV3 :active-tab="activeTab" />
</template>
