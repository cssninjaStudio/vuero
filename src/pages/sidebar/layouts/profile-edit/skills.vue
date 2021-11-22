<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile Edit 3')

useHead({
  title: 'Profile Edit 3 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSkills />
</template>
