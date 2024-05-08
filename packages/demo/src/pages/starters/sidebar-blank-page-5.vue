<script setup lang="ts">
import Layout from '/@src/layouts/sidebar.vue'

/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/starters/sidebar-blank-page-5
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'Blank Page 5'
})

useHead({
  title: 'Blank Page 5 - Sidebar - Vuero',
})
</script>

<template>
  <Layout theme="labels">
    <!--
      Page content goes here

      You can see pages content samples from
      files in /src/components/pages directory
    -->
  </Layout>
</template>
