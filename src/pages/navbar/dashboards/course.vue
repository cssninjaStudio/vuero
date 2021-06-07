<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Business 4'
useHead({
  title: 'Business 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CourseDashboard />
  </div>
</template>
