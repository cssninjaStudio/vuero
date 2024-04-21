<script setup lang="ts">
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Utility Account Confirm')

useHead({
  title: 'Utility Account Confirm - Sidebar - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <ConfirmAccount />
  </div>
</template>
