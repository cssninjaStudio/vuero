<script lang="ts">
import { defineComponent } from 'vue'
import {
  ActivityIcon,
  GridIcon,
  BoxIcon,
  CpuIcon,
  MessageCircleIcon,
  SearchIcon,
  SettingsIcon,
} from '@zhuowenli/vue-feather-icons'

const MobileSidebarMain = defineComponent({
  name: 'MobileSidebarMain',
  components: {
    ActivityIcon,
    GridIcon,
    BoxIcon,
    CpuIcon,
    MessageCircleIcon,
    SearchIcon,
    SettingsIcon,
  },
  setup() {
    // MobileSidebarMain - Composition API

    return {}
  },
})

export default MobileSidebarMain
</script>

<template>
  <div class="mobile-main-sidebar">
    <div class="inner">
      <ul class="icon-side-menu">
        <li>
          <a
            id="home-sidebar-menu-mobile"
            href="/admin-dashboards-personal-1.html"
          >
            <ActivityIcon />
          </a>
        </li>
        <li>
          <a id="layouts-sidebar-menu-mobile" href="/admin-grid-users-1.html">
            <GridIcon />
          </a>
        </li>
        <li>
          <a id="elements-sidebar-menu-mobile" href="/elements-hub.html">
            <BoxIcon />
          </a>
        </li>
        <li>
          <a id="components-sidebar-menu-mobile" href="/components-hub.html">
            <CpuIcon />
          </a>
        </li>
        <li>
          <a id="open-messages-mobile" href="/messaging-chat.html">
            <MessageCircleIcon />
          </a>
        </li>
      </ul>

      <ul class="bottom-icon-side-menu">
        <li>
          <a href="#">
            <SearchIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <SettingsIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
