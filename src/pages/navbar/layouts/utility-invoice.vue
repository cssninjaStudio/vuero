<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Utility Invoice'
useHead({
  title: 'Utility Invoice - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <Invoice class="is-navbar" />
  </div>
</template>
