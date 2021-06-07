<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Form Layouts 1'
useHead({
  title: 'Form Layouts 1 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayout />
  </div>
</template>
