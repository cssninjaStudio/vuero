<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Form Layouts 5'
useHead({
  title: 'Form Layouts 5 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStepper />
  </div>
</template>
