<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 1'
})

useHead({
  title: 'Form Layouts 1 - Sidebar - Vuero',
})
</script>

<template>
  <FormLayout />
</template>
