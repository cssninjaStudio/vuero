<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/sidebarLayoutState'

type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')

pageTitle.value = 'List Flex 3'
useHead({
  title: 'List Flex 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <FlexListV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
