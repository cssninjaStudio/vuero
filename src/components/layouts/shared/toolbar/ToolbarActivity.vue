<script setup lang="ts">
const panels = usePanels()
</script>

<template>
  <a
    class="toolbar-link right-panel-trigger"
    aria-label="View activity panel"
    tabindex="0"
    role="button"
    @keydown.space.prevent="panels.setActive('activity')"
    @click="panels.setActive('activity')"
  >
    <iconify-icon
      aria-hidden="true"
      class="iconify"
      icon="lucide:grid"
    />
  </a>
</template>
