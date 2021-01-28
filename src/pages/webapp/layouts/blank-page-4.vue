<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Blank Page 4 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Blank Template</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner"></div>
  </div>
</template>
