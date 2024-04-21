<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Form Layouts 5')

useHead({
  title: 'Form Layouts 5 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStepper class="is-navbar" />
  </div>
</template>
