<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('List View 1')

useHead({
  title: 'List View 1 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ViewListV1 />
  </div>
</template>
