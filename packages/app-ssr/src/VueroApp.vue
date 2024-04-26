<script setup lang="ts">
// This is the global app setup function

useHead(() => ({
  title: 'My App',
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
  meta: [
    // Critical Tags
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
  ],
}))
</script>

<template>
  <div>
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
