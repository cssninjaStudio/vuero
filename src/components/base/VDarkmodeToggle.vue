<script setup lang="ts">
const { isDark, onChange } = useDarkmode()
</script>

<template>
  <label
    data-cy="dark-mode-toggle"
    class="dark-mode"
    tabindex="0"
    role="button"
    @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
  >
    <input
      data-cy="dark-mode-toggle"
      type="checkbox"
      :checked="!isDark"
      @click="onChange"
    >
    <span />
  </label>
</template>
