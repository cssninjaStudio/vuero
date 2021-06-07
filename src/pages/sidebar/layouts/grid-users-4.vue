<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Grid Users 4'
useHead({
  title: 'Grid Users 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV4 />
  </div>
</template>
