<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { setLayout } from '/@src/composition/state/webappLayoutState'

setLayout('webapp-v7')

useHead({
  title: 'Blank Page 7 - WebApp - Vuero',
})
</script>

<template>
  <div class="page-content-inner"></div>
</template>
