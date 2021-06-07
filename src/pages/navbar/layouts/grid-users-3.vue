<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import { pageTitle } from '/@src/state/navbarLayoutState'

type TabId = 'all' | 'team'
const activeTab = ref<TabId>('all')

pageTitle.value = 'Grid Users 3'
useHead({
  title: 'Grid Users 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV3 :active-tab="activeTab" />
  </div>
</template>
