<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

import { isDark } from '/@src/composition/state/ui/darkModeState.ts'
import { activePanel } from '/@src/composition/state/ui/activePanelState'

const isOpen = ref(false)
const { y } = useWindowScroll()
const isScrolling = computed(() => {
  if (y.value <= 30) {
    isOpen.value = false
  }
  
  return y.value > 30
})

</script>

<template>
  <div
    id="circular-menu"
    :class="[isScrolling && 'is-active', isOpen && 'active']"
    class="circular-menu"
  >
    <a class="floating-btn" @click="isOpen = !isOpen">
      <i class="fas fa-bars"></i>
      <i class="fas fa-times"></i>
    </a>

    <div class="items-wrapper">
      <div class="menu-item is-flex">
        <label class="dark-mode">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="
              (event) => {
                isDark = !event.target.checked
              }
            "
          />
          <span></span>
        </label>
      </div>
      <a
        class="menu-item is-flex right-panel-trigger"
        @click="activePanel = 'languages'"
      >
        <img src="/@images/icons/flags/united-states-of-america.svg" alt="" />
      </a>
      <a class="menu-item is-flex">
        <Icon icon="feather:bell" />
      </a>
      <a class="menu-item is-flex">
        <Icon icon="feather:grid" />
      </a>
    </div>
  </div>
</template>
