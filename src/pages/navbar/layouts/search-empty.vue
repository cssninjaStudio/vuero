<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Search Empty')

useHead({
  title: 'Search Empty - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted is-navbar-lg"
  >
    <div class="page-content-inner">
      <EmptySearch />
    </div>
  </div>
</template>
