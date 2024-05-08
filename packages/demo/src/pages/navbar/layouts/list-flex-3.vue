<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List Flex 3'
})

useHead({
  title: 'List Flex 3 - Navbar - Vuero',
})
</script>

<template>
  <FlexListV3 />
</template>
