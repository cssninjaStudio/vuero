<script setup lang="ts">
import { activePanel } from '/@src/state/activePanelState'
</script>

<template>
  <li class="right-panel-trigger">
    <a id="open-search" data-content="Search" @click="activePanel = 'search'"
      ><i class="iconify sidebar-svg" data-icon="feather-search"
    /></a>
    <a
      id="close-search"
      class="is-hidden is-inactive"
      @click="activePanel = 'none'"
      ><i class="iconify sidebar-svg" data-icon="feather-x"
    /></a>
  </li>
</template>
