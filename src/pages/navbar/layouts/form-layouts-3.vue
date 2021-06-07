<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Form Layouts 3'
useHead({
  title: 'Form Layouts 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutSeparate />
  </div>
</template>
