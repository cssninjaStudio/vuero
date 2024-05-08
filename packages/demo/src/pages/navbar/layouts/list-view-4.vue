<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'List View 4'
})

useHead({
  title: 'List View 4 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg"
  >
    <ViewListV4 />
  </div>
</template>
