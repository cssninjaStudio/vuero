<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/navbarLayoutState'

type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')

pageTitle.value = 'List View 3'
useHead({
  title: 'List View 3 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="
      page-content
      is-relative
      tabs-wrapper
      is-slider is-squared is-inverted is-navbar-lg
    "
  >
    <div class="page-content-inner">
      <ViewListV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
