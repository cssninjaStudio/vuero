<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Form Layouts 1')

useHead({
  title: 'Form Layouts 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <FormLayout class="is-navbar" />
  </div>
</template>
