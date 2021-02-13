<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Dashboards Widgets List - WebApp - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsList class="has-webapp-spacing" />
  </div>
</template>
