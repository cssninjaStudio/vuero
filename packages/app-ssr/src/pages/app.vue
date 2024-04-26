<route lang="yaml">
  meta:
    requiresAuth: true
</route>

<script setup lang="ts">
import Layout from '/@src/layouts/sideblock.vue'

useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
