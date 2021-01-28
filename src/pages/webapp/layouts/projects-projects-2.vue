<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Projects Projects 2 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Projects</h1>
      </div>

      <Toolbar />
    </div>

    <ProjectsViewV2 class="page-content-inner is-webapp" />
  </div>
</template>
