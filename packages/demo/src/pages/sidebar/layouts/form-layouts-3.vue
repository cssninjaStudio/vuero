<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 3'
})

useHead({
  title: 'Form Layouts 3 - Sidebar - Vuero',
})
</script>

<template>
  <FormLayoutSeparate />
</template>
