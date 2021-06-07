<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Food Delivery App'
useHead({
  title: 'Food Delivery App - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FoodDeliveryApp />
  </div>
</template>
