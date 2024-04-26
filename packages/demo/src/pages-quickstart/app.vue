<route lang="yaml">
meta:
  requiresAuth: true
</route>

<template>
  <AppLayout>
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition
        name="fade-fast"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>
