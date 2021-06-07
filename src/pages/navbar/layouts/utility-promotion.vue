<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Utility Promotion'
useHead({
  title: 'Utility Promotion - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Promotion />
  </div>
</template>
