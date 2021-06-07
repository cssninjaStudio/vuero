<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Widgets List'
useHead({
  title: 'Widgets List - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <WidgetsList />
  </div>
</template>
