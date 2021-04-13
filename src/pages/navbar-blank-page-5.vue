<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 *
 * You will be able to access this page at http://localhost:3000/navbar-blank-page-5
 * Page uri will match related path to src/pages folder
 *
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'

useHead({
  title: 'Blank Page 5 - Navbar - Vuero',
})
</script>

<template>
  <NavbarAltColoredLayout>
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div class="view-wrapper has-top-nav">
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="is-navbar-lg">
            <div class="page-title has-text-centered">
              <!-- Sidebar Trigger -->
              <div class="vuero-hamburger nav-trigger push-resize">
                <span class="menu-toggle has-chevron">
                  <span class="icon-box-toggle">
                    <span class="rotate">
                      <i class="icon-line-top"></i>
                      <i class="icon-line-center"></i>
                      <i class="icon-line-bottom"></i>
                    </span>
                  </span>
                </span>
              </div>

              <div class="title-wrap">
                <h1 class="title is-4">Blank Page 5 - Navbar</h1>
              </div>

              <Toolbar />
            </div>
            <div class="page-content-inner">
              <!--
                Page content goes here

                You can see pages content samples from 
                files in /src/components/pages directory
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </NavbarAltColoredLayout>
</template>
