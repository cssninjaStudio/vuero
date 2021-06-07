<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Utility Account Confirm'
useHead({
  title: 'Utility Account Confirm - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ConfirmAccount />
  </div>
</template>
