<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Dashboards Personal 3 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Dashboard</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <PersonalDashboardV3 class="has-webapp-spacing" />
    </div>
  </div>
</template>
