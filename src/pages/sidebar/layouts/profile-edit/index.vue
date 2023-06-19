<script setup lang="ts">
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile Edit 1')

useHead({
  title: 'Profile Edit 1 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileGeneral />
</template>
