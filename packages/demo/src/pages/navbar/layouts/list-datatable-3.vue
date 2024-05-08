<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Table List 3'
})

useHead({
  title: 'Table List 3 - Navbar - Vuero',
})
</script>

<template>
  <TableListV3 />
</template>
