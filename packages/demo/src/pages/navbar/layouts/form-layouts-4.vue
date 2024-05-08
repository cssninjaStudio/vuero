<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 4'
})

useHead({
  title: 'Form Layouts 4 - Navbar - Vuero',
})
</script>

<template>
  <FormLayoutStacked class="is-navbar" />
</template>
