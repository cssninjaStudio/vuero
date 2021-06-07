<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Profile Edit 4'
useHead({
  title: 'Profile Edit 4 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSettings />
</template>
