<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Dashboards Widgets Creative - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Widgets</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <WidgetsCreative class="has-webapp-spacing" />
    </div>
  </div>
</template>
