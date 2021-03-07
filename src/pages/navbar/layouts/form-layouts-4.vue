<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Form Layouts 4 - Navbar - Vuero',
})
</script>

<template>
  <div class="is-navbar-lg">
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div class="huro-hamburger nav-trigger push-resize">
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
        <h1 class="title is-4">Forms</h1>
      </div>

      <Toolbar />
    </div>
    <div class="page-content-inner">
      <FormLayoutStacked class="is-navbar" />
    </div>
  </div>
</template>
