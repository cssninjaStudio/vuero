<script setup lang="ts">
const pageTitle = useVueroContext('page-title')
onMounted(() => {
  pageTitle.value = 'Utility Invoice'
})

useHead({
  title: 'Utility Invoice - Navbar - Vuero',
})
</script>

<template>
  <Invoice class="is-navbar" />
</template>
