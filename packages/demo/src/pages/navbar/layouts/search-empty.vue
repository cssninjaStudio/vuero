<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Search Empty'
})

useHead({
  title: 'Search Empty - Navbar - Vuero',
})
</script>

<template>
  <div class="is-navbar-lg">
    <EmptySearch />
  </div>
</template>
