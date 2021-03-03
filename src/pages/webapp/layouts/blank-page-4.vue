<script setup lang="ts">
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { setLayout } from '/@src/composition/state/webappLayoutState'

useHead({
  title: 'Blank Page 4 - WebApp - Vuero',
})

onMounted(() => {
  setLayout('webapp-v4')
})
</script>

<template>
  <div class="page-content-inner"></div>
</template>
