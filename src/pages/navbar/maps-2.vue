<script setup lang="ts">
import { useHead } from '@vueuse/head'

import {
  navbarLayoutComponent,
  navbarLayoutId,
  navbarLayoutTheme,
} from '/@src/state/navbarLayoutState'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Maps 2')

useHead({
  title: 'Maps 2 - Navbar - Vuero',
})
</script>

<template>
  <component :is="navbarLayoutComponent" :theme="navbarLayoutTheme" nowrap>
    <MapsDashboard reversed />
  </component>
</template>
