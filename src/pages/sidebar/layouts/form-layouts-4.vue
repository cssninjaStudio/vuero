<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Form Layouts 4'
useHead({
  title: 'Form Layouts 4 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStacked />
  </div>
</template>
