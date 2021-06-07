<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Apps 1'
useHead({
  title: 'Apps 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FoodDeliveryApp />
  </div>
</template>
