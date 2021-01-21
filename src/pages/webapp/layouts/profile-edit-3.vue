<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { activeSidebar } from '/@src/composition/state/ui/activeSidebarState'

useHead({
  title: 'Profile Edit 3 - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Edit Profile</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner is-webapp">
      <EditProfileV3 class="is-webapp" />
    </div>
  </div>
</template>
