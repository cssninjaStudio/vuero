<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/sidebarLayoutState'

type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

pageTitle.value = 'List Flex 2'
useHead({
  title: 'List Flex 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FlexListV2 :active-tab="activeTab" />
    </div>
  </div>
</template>
