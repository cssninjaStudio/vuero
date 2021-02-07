<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
const defaultLocale = useStorage(
  'locale',
  (navigator && navigator.language) || 'en'
)

watchEffect(() => {
  defaultLocale.value = i18n.locale.value
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-slow" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
