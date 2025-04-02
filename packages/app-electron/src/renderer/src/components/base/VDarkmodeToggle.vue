<script setup lang="ts">
const { isDark, onChange } = useDarkmode()
</script>

<template>
  <label
    class="dark-mode"
    tabindex="0"
    role="button"
    @keydown.enter.prevent="(e) => (e.target as HTMLLabelElement).click()"
  >
    <ClientOnly>
      <input
        type="checkbox"
        :checked="!isDark"
        @click="onChange"
      >
      <span />
    </ClientOnly>
  </label>
</template>
