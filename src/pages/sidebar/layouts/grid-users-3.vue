<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/sidebarLayoutState'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

pageTitle.value = 'Grid Users 3'
useHead({
  title: 'Grid Users 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <UsersGridV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
