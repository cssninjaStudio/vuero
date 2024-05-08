<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Table List 1'
})

useHead({
  title: 'Table List 1 - Navbar - Vuero',
})
</script>

<template>
  <TableListV1 />
</template>
