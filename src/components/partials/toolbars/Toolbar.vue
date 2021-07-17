<script setup lang="ts">
import { isDark } from '/@src/state/darkModeState'
import { activePanel } from '/@src/state/activePanelState'
import useDropdown from '/@src/composable/useDropdown'
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'

const { locale } = useI18n()
const dropdownElement = ref<HTMLElement | null>(null)
const dropdown = useDropdown(dropdownElement)

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
  <div class="toolbar ml-auto">
    <div class="toolbar-link">
      <label class="dark-mode ml-auto">
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
      class="toolbar-link right-panel-trigger"
      @click="activePanel = 'languages'"
    >
      <img :src="localFlagSrc" alt="" />
    </a>

    <slot></slot>
  </div>
</template>
