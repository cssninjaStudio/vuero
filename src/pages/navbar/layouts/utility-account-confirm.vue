<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Utility Account Confirm'
useHead({
  title: 'Utility Account Confirm - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ConfirmAccount />
  </div>
</template>
