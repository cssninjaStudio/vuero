<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Action Page 2'
useHead({
  title: 'Action Page 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ActionPageV2 />
  </div>
</template>
