<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

useHead({
  title: 'Grid Users 3 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg"
  >
    <div class="page-content-inner">
      <UsersGridV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
