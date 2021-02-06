<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'List View 2 - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted"
  >
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">List View</h1>
      </div>

      <Toolbar />
    </div>

    <ViewListV2 />
  </div>
</template>
