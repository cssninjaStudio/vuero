<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/navbarLayoutState'

type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

pageTitle.value = 'List Flex 2'
useHead({
  title: 'List Flex 2 - Navbar - Vuero',
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
      <FlexListV2 class="is-navbar" :active-tab="activeTab" />
    </div>
  </div>
</template>
