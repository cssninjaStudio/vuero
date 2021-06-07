<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Profile Edit 1'
useHead({
  title: 'Profile Edit 1 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileGeneral />
</template>
