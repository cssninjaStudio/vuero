<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Form Layouts 2'
useHead({
  title: 'Form Layouts 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutSplit />
  </div>
</template>
