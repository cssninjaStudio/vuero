<script setup lang="ts">
import { useHead } from '@vueuse/head'

import {
  navbarLayoutComponent,
  navbarLayoutId,
  navbarLayoutTheme,
  pageTitle,
} from '/@src/state/navbarLayoutState'

pageTitle.value = 'Maps 1'
useHead({
  title: 'Maps 1 - Navbar - Vuero',
})
</script>

<template>
  <component :is="navbarLayoutComponent" :theme="navbarLayoutTheme" nowrap>
    <MapsDashboard />
  </component>
</template>
