<script setup lang="ts">
import Layout from '/@src/layouts/sideblock.vue'

/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/starters/sideblock-blank-page-1
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Blank Page 2'
})

useHead({
  title: 'Blank Page 2 - Sideblock - Vuero',
})
</script>

<template>
  <Layout
    theme="curved"
    open-on-mounted
  >
    <!--
      Page content goes here

      You can see pages content samples from
      files in /src/components/pages directory
    -->
  </Layout>
</template>
