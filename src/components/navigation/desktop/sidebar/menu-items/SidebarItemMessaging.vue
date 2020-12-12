<script lang="ts">
import { defineComponent } from 'vue'

const SidebarItemMessaging = defineComponent({
  name: 'SidebarItemMessaging',
  components: {},
  setup() {
    // SidebarItemMessaging - Composition API

    return {}
  },
})

export default SidebarItemMessaging
</script>

<template>
  <li id="messages-menu">
    <a id="open-messages" href="admin-messaging-chat.html">
      <i class="sidebar-svg" data-feather="message-circle"></i>
    </a>
  </li>
</template>