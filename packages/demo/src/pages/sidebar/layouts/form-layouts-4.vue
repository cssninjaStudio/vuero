<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 4'
})

useHead({
  title: 'Form Layouts 4 - Sidebar - Vuero',
})
</script>

<template>
  <FormLayoutStacked />
</template>
