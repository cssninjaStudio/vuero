<script setup lang="ts">
const panels = usePanels()
</script>

<template>
  <a
    class="toolbar-link right-panel-trigger"
    aria-label="View activity panel"
    tabindex="0"
    role="button"
    @keydown.enter.prevent="panels.setActive('activity')"
    @click="panels.setActive('activity')"
  >
    <VIcon
      icon="lucide:grid"
    />
  </a>
</template>
