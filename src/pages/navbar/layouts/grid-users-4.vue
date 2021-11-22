<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Grid Users 4')

useHead({
  title: 'Grid Users 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV4 />
  </div>
</template>
