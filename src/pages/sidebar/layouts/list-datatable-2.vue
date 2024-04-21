<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Table List 2')

useHead({
  title: 'Table List 2 - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <TableListV2 />
  </div>
</template>
