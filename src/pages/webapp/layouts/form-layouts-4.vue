<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Form Layouts 4 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Form Layouts</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <FormLayoutStacked class="is-webapp" />
    </div>
  </div>
</template>
