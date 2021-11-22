<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Business 4')

useHead({
  title: 'Business 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <CourseDashboard />
  </div>
</template>
