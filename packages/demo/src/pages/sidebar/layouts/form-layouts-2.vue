<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 2'
})

useHead({
  title: 'Form Layouts 2 - Sidebar - Vuero',
})
</script>

<template>
  <FormLayoutSplit />
</template>
