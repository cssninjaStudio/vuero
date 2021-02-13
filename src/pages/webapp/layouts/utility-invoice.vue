<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Utility Invoice - WebApp - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Invoice class="is-webapp" />
  </div>
</template>
