<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Search Empty'
useHead({
  title: 'Search Empty - Navbar - Vuero',
})
</script>

<template>
  <div
    class="
      page-content
      is-relative
      tabs-wrapper
      is-triple-slider is-squared is-inverted is-navbar-lg
    "
  >
    <div class="page-content-inner">
      <EmptySearch />
    </div>
  </div>
</template>
