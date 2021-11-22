<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Users 1')

useHead({
  title: 'Grid Users 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV1 />
  </div>
</template>
