<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Profile View'
useHead({
  title: 'Profile View - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewProfile />
  </div>
</template>
