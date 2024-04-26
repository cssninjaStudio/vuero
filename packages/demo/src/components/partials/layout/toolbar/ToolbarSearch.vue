<script setup lang="ts">
const panels = usePanels()
</script>

<template>
  <a
    class="search-link"
    aria-label="Display search panel"
    data-content="Search"
    tabindex="0"
    role="button"
    @keydown.enter.prevent="panels.setActive('search')"
    @click="panels.setActive('search')"
  >
    <VIcon
      class="sidebar-svg"
      icon="lucide:search"
    />
  </a>
</template>
