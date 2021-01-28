<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Dashboards Charts Apex - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Apex Charts</h1>
      </div>

      <Toolbar />
    </div>

    <ApexDashboard class="page-content-inner p-t-30" />
  </div>
</template>
