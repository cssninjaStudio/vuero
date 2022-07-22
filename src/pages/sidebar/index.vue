<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  router.push({
    name: '/sidebar/dashboards',
  })
})
</script>

<template>
  <div></div>
</template>
