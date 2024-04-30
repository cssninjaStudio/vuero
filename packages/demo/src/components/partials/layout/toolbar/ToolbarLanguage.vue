<script setup lang="ts">
const { locale } = useI18n()
const panels = usePanels()

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
    case 'ar':
      return '/images/icons/flags/saudi-arabia.svg'
    case 'en':
    default:
      return '/images/icons/flags/united-states-of-america.svg'
  }
})
</script>

<template>
  <a
    tabindex="0"
    role="button"
    class="toolbar-link right-panel-trigger"
    @keydown.enter.prevent="panels.setActive('languages')"
    @click="panels.setActive('languages')"
  >
    <img
      :src="localFlagSrc"
      alt=""
      width="24"
      height="24"
    >
  </a>
</template>
