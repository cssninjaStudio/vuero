<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Utility Account Confirm'
})

useHead({
  title: 'Utility Account Confirm - Sidebar - Vuero',
})
</script>

<template>
  <ConfirmAccount />
</template>
