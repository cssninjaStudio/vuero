<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { setLayout } from '/@src/composition/state/webappLayoutState'

useHead({
  title: 'Blank Page 3 - WebApp - Vuero',
})

onMounted(() => {
  setLayout('webapp-v3')
})
</script>

<template>
  <div class="page-content-inner"></div>
</template>
