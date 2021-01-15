<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const defaultLocale = useStorage('locale', navigator.language || 'en')

watch(i18n.locale, () => {
  defaultLocale.value = i18n.locale.value
})
</script>


<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
