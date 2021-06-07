<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Grid Users 2'
useHead({
  title: 'Grid Users 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV2 />
  </div>
</template>
