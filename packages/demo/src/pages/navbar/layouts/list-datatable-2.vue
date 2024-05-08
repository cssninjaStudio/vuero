<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Table List 2'
})

useHead({
  title: 'Table List 2 - Navbar - Vuero',
})
</script>

<template>
  <TableListV2 />
</template>
