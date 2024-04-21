<script setup lang="ts">
const darkmode = useDarkmode()
</script>

<template>
  <div class="toolbar-link">
    <label
      tabindex="0"
      class="dark-mode"
      role="button"
      @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
    >
      <input
        data-cy="dark-mode-toggle"
        type="checkbox"
        :checked="!darkmode.isDark"
        @change="darkmode.onChange"
      >
      <span />
    </label>
  </div>
</template>
