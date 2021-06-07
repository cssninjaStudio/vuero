<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'List View 1'
useHead({
  title: 'List View 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewListV1 />
  </div>
</template>
