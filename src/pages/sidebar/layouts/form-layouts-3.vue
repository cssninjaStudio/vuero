<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Form Layouts 3'
useHead({
  title: 'Form Layouts 3 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutSeparate />
  </div>
</template>
