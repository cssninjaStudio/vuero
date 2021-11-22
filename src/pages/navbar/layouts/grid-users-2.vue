<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Users 2')

useHead({
  title: 'Grid Users 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV2 />
  </div>
</template>
