<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Form Layouts 4')

useHead({
  title: 'Form Layouts 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutStacked class="is-navbar" />
  </div>
</template>
