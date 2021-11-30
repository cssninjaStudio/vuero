<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Maps 1')

useHead({
  title: 'Maps 1 - Navbar - Vuero',
})
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    nowrap
  >
    <MapsDashboard />
  </component>
</template>
