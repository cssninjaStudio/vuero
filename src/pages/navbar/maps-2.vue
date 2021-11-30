<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Maps 2')

useHead({
  title: 'Maps 2 - Navbar - Vuero',
})
</script>

<template>
  <component
    :is="layoutSwitcher.dynamicLayoutComponent"
    v-bind="layoutSwitcher.dynamicLayoutProps"
    nowrap
  >
    <MapsDashboard reversed />
  </component>
</template>
