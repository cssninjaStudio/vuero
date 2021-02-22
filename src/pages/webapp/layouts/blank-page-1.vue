<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { setLayout } from '/@src/composition/state/webappLayoutState'

setLayout('webapp-v1')

useHead({
  title: 'Blank Page 1 - WebApp - Vuero',
})
</script>

<template>
  <div class="page-content-inner"></div>
</template>
