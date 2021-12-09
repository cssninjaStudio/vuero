<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/starters/navbar-blank-page-6
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Blank Page 6')

useHead({
  title: 'Blank Page 6 - Navbar - Vuero',
})
</script>

<template>
  <NavbarSearchLayout>
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <!--
        Page content goes here

        You can see pages content samples from 
        files in /src/components/pages directory
      -->
    </div>
  </NavbarSearchLayout>
</template>
