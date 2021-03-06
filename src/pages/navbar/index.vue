<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  router.push({
    name: 'navbar-dashboards',
  })
})
</script>

<template>
  <div></div>
</template>
