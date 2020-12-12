<script lang="ts">
import { defineComponent } from 'vue'

const SidebarItemHome = defineComponent({
  name: 'SidebarItemHome',
  components: {},
  setup() {
    // SidebarItemHome - Composition API

    return {}
  },
})

export default SidebarItemHome
</script>

<template>
  <li>
    <a id="home-sidebar-menu" href="/admin-dashboards-personal-1.html">
      <i class="sidebar-svg" data-feather="activity"></i>
    </a>
  </li>
</template>