<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  router.push({
    name: '/navbar/dashboards',
  })
})
</script>

<template>
  <div></div>
</template>
