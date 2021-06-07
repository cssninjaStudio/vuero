<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Grid Users 1'
useHead({
  title: 'Grid Users 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <UsersGridV1 />
  </div>
</template>
