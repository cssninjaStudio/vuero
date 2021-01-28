<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'List View 1 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <div class="title-wrap">
        <h1 class="title is-4">List View</h1>
      </div>

      <Toolbar />
    </div>

    <ViewListV1 />
  </div>
</template>
