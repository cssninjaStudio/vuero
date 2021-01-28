<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Dashboards Charts BillboardJS - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Billboard Js</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner p-t-30">
      <BillboardJsDashboard />
    </div>
  </div>
</template>
