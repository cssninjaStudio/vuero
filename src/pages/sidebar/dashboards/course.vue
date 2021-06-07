<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Course Dashboard'
useHead({
  title: 'Course Dashboard - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CourseDashboard />
  </div>
</template>
