<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Users 1'
useHead({
  title: 'Grid Users 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV1 />
  </div>
</template>
