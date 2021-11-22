<script setup lang="ts">
import { useHead } from '@vueuse/head'

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
