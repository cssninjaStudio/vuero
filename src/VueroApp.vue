<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <VReloadPrompt app-name="Vuero" />
</template>
