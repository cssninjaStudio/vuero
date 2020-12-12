<script lang="ts">
import { defineComponent } from 'vue'
import { BellIcon, GridIcon } from '@zhuowenli/vue-feather-icons'

const CircularMenu = defineComponent({
  name: 'CircularMenu',
  components: {
    BellIcon,
    GridIcon,
  },
  setup() {
    // CircularMenu - Composition API

    return {}
  },
})

export default CircularMenu
</script>

<template>
  <div id="circular-menu" class="circular-menu">
    <a class="floating-btn">
      <i class="fas fa-bars"></i>
      <i class="fas fa-times"></i>
    </a>

    <div class="items-wrapper">
      <div class="menu-item is-flex">
        <label class="dark-mode">
          <input type="checkbox" checked />
          <span></span>
        </label>
      </div>
      <a
        class="menu-item is-flex right-panel-trigger"
        data-panel="languages-panel"
      >
        <img src="/img/icons/flags/united-states-of-america.svg" alt="" />
      </a>
      <a class="menu-item is-flex">
        <BellIcon />
      </a>
      <a class="menu-item is-flex">
        <GridIcon />
      </a>
    </div>
  </div>
</template>
