<script setup lang="ts">
const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'My App'
})
</script>

<template>
  <div>
    <VCard>
      Hello Vuero
    </VCard>
  </div>
</template>
