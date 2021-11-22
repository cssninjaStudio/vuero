<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Utility Account Confirm')

useHead({
  title: 'Utility Account Confirm - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ConfirmAccount />
  </div>
</template>
