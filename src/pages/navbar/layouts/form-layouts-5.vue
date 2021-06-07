<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Form Layouts 5'
useHead({
  title: 'Form Layouts 5 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStepper class="is-navbar" />
  </div>
</template>
