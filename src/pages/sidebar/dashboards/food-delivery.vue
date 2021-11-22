<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Food Delivery App')

useHead({
  title: 'Food Delivery App - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FoodDeliveryApp />
  </div>
</template>
