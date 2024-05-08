<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List Flex 1'
})

useHead({
  title: 'List Flex 1 - Sidebar - Vuero',
})
</script>

<template>
  <FlexListV1 />
</template>
