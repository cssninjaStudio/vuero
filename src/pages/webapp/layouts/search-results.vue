<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Search Results - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
  >
    <div class="page-content-inner">
      <FacetSearch />
    </div>
  </div>
</template>
