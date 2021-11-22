<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Profile Edit 4')

useHead({
  title: 'Profile Edit 4 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSettings />
</template>
