<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { setLayout } from '/@src/composition/state/webappLayoutState'

useHead({
  title: 'Blank Page 8 - WebApp - Vuero',
})

onMounted(() => {
  setLayout('webapp-v8')
})
</script>

<template>
  <div class="page-content-inner"></div>
</template>
