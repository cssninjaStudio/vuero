<script setup lang="ts">
type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List View 3'
})

useHead({
  title: 'List View 3 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg"
  >
    <ViewListV3 :active-tab="activeTab" />
  </div>
</template>
