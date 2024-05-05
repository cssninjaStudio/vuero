<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Widgets List'
})

useHead({
  title: 'Widgets List - Navbar - Vuero',
})
</script>

<template>
  <WidgetsList />
</template>
