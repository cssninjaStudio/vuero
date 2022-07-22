<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <AppLayout>
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition name="fade-fast" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>
