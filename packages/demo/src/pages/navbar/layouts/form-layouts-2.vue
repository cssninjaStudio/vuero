<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 2'
})

useHead({
  title: 'Form Layouts 2 - Navbar - Vuero',
})
</script>

<template>
  <FormLayoutSplit class="is-navbar" />
</template>
