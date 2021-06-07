<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Profile Edit 3'
useHead({
  title: 'Profile Edit 3 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileSkills />
</template>
