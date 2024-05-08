<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Utility Account Confirm'
})

useHead({
  title: 'Utility Account Confirm - Navbar - Vuero',
})
</script>

<template>
  <ConfirmAccount />
</template>
