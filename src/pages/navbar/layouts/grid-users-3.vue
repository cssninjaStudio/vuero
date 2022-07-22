<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Users 3')

useHead({
  title: 'Grid Users 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV3 :active-tab="activeTab" />
  </div>
</template>
