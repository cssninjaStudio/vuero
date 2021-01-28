<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Projects Project - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Project</h1>
      </div>

      <Toolbar />
    </div>

    <ProjectsViewV1 class="page-content-inner is-webapp" />
    <!-- <TaskPanel /> -->
  </div>
</template>
