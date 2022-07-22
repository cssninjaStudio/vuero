<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

type TabId = 'active' | 'inactive'
const activeTab = ref<TabId>('active')

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List View 3')

useHead({
  title: 'List View 3 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg"
  >
    <div class="page-content-inner">
      <ViewListV3 :active-tab="activeTab" />
    </div>
  </div>
</template>
