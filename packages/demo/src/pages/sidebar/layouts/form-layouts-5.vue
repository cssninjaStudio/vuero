<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 5'
})

useHead({
  title: 'Form Layouts 5 - Sidebar - Vuero',
})
</script>

<template>
  <FormLayoutStepper />
</template>
