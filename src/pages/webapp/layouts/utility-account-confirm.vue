<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Utility Account Confirm - WebApp - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered is-webapp">
      <div class="title-wrap">
        <h1 class="title is-4">Confirm Account</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <ConfirmAccount />
    </div>
  </div>
</template>
