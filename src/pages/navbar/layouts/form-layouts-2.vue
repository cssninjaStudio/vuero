<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Form Layouts 2')

useHead({
  title: 'Form Layouts 2 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayoutSplit class="is-navbar" />
  </div>
</template>
