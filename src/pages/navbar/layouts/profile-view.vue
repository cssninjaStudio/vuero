<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile View')

useHead({
  title: 'Profile View - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewProfile />
  </div>
</template>
