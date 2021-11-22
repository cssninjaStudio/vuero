<script setup lang="ts">
import { useHead } from '@vueuse/head'

import {
  navbarLayoutComponent,
  navbarLayoutId,
  navbarLayoutTheme,
  pageTitle,
} from '/@src/state/navbarLayoutState'

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
