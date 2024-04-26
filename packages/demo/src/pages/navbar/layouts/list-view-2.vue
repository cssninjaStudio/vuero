<script setup lang="ts">
useVueroContext({
  pageTitle: 'List View 2',
})

useHead({
  title: 'List View 2 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg"
  >
    <ViewListV2 />
  </div>
</template>
