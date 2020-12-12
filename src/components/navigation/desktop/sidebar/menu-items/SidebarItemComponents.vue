<script lang="ts">
import { defineComponent } from 'vue'

const SidebarItemComponents = defineComponent({
  name: 'SidebarItemComponents',
  components: {},
  setup() {
    // SidebarItemComponents - Composition API

    return {}
  },
})

export default SidebarItemComponents
</script>

<template>
  <li>
    <a id="components-sidebar-menu" href="components-hub.html">
      <i class="sidebar-svg" data-feather="cpu"></i>
    </a>
  </li>
</template>