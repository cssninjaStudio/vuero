<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Search Results')

useHead({
  title: 'Search Results - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-triple-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FacetSearch />
    </div>
  </div>
</template>
