<script setup lang="ts">
import { useHead } from '@vueuse/head'

import {
  navbarLayoutComponent,
  navbarLayoutId,
  navbarLayoutTheme,
  pageTitle,
} from '/@src/state/navbarLayoutState'

pageTitle.value = 'Maps 2'
useHead({
  title: 'Maps 2 - Navbar - Vuero',
})
</script>

<template>
  <component :is="navbarLayoutComponent" :theme="navbarLayoutTheme" nowrap>
    <MapsDashboard reversed />
  </component>
</template>
