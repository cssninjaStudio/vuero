<script setup lang="ts">
import Layout from '/@src/layouts/sidebar.vue'

/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/starters/sidebar-blank-page-7
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

useVueroContext({
  pageTitle: 'Blank Page 7',
})

useHead({
  title: 'Blank Page 7 - Sidebar - Vuero',
})
</script>

<template>
  <Layout theme="float">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <!--
          Page content goes here

          You can see pages content samples from
          files in /src/components/pages directory
        -->
    </div>
  </Layout>
</template>
