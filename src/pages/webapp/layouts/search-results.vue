<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Search Results - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
  >
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Search Results</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner is-webapp">
      <SearchResultsContent class="is-webapp" />
    </div>
  </div>
</template>
