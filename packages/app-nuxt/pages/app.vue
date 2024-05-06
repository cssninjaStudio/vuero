<script setup lang="ts">
definePageMeta({
  layout: 'sideblock',
  requiresAuth: true
})

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
  <div>
    <NuxtPage />
  </div>
</template>
