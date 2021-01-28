<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Saas Billing - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">SaaS Billing</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner is-webapp">
      <SassBilling class="is-webapp" />
    </div>
  </div>
</template>
