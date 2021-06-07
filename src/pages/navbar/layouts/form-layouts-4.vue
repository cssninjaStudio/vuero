<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Form Layouts 4'
useHead({
  title: 'Form Layouts 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStacked class="is-navbar" />
  </div>
</template>
