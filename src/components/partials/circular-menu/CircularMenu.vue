<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { isDark } from '/@src/state/darkModeState'
import { activePanel } from '/@src/state/activePanelState'

const { locale } = useI18n()
const { y } = useWindowScroll()
const isOpen = ref(false)
const isScrolling = computed(() => {
  if (y.value <= 30) {
    isOpen.value = false
  }

  return y.value > 30
})

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})
</script>

<template>
  <div
    id="circular-menu"
    :class="[isScrolling && 'is-active', isOpen && 'active']"
    class="circular-menu"
  >
    <a class="floating-btn" @click="isOpen = !isOpen">
      <i aria-hidden="true" class="fas fa-bars"></i>
      <i aria-hidden="true" class="fas fa-times"></i>
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
        <img :src="localFlagSrc" alt="" />
      </a>
      <RouterLink
        :to="{ name: 'sidebar-layouts-profile-notifications' }"
        class="menu-item is-flex"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
      </RouterLink>
      <a class="menu-item is-flex" @click="activePanel = 'activity'">
        <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
      </a>
    </div>
  </div>
</template>
