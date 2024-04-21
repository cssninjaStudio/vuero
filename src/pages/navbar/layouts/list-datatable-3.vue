<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Table List 3')

useHead({
  title: 'Table List 3 - Navbar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV3 />
  </div>
</template>
