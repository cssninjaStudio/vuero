<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Search Empty - WebApp - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-triple-slider is-squared is-inverted"
  >
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Empty Search</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner is-webapp">
      <EmptySearch class="is-webapp" />
    </div>
  </div>
</template>
