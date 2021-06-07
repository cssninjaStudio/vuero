<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Profile Edit 2'
useHead({
  title: 'Profile Edit 2 - Sidebar - Vuero',
})
</script>

<template>
  <EditProfileExperience />
</template>
