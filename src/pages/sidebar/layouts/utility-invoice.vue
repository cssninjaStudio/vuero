<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Utility Invoice'
useHead({
  title: 'Utility Invoice - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Invoice />
  </div>
</template>
