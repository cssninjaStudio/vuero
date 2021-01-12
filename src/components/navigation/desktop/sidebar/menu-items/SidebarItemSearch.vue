<script setup lang="ts">
import { activePanel } from '/@src/composition/state/ui/activePanelState'
</script>

<template>
  <li class="right-panel-trigger">
    <a id="open-search" @click="activePanel = 'search'"
      ><Icon icon="feather-search" class="sidebar-svg"
    /></a>
    <a
      id="close-search"
      class="is-hidden is-inactive"
      @click="activePanel = 'none'"
      ><Icon icon="feather-x" class="sidebar-svg"
    /></a>
  </li>
</template>
