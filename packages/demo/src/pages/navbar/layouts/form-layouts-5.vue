<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Form Layouts 5'
})

useHead({
  title: 'Form Layouts 5 - Navbar - Vuero',
})
</script>

<template>
  <FormLayoutStepper class="is-navbar" />
</template>
