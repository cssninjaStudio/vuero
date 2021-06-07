<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/sidebarLayoutState'

type TabId = 'all' | 'saved'
const activeTab = ref<TabId>('all')

pageTitle.value = 'List View 4'
useHead({
  title: 'List View 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <ViewListV4 :active-tab="activeTab" />
    </div>
  </div>
</template>
