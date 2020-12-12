<script lang="ts">
import { defineComponent } from 'vue'

const SidebarItemSettings = defineComponent({
  name: 'SidebarItemSettings',
  components: {},
  setup() {
    // SidebarItemSettings - Composition API

    return {}
  },
})

export default SidebarItemSettings
</script>

<template>
  <li class="is-rotate">
    <a id="open-settings" href="/admin-profile-settings.html">
      <i class="sidebar-svg" data-feather="settings"></i>
    </a>
  </li>
</template>