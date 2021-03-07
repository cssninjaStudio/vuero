<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

type TabId = 'active' | 'closed'
const activeTab = ref<TabId>('active')

useHead({
  title: 'List Flex 3 - Navbar - Vuero',
})
</script>

<template>
  <div
    class="page-content is-relative tabs-wrapper is-slider is-squared is-inverted is-navbar-lg"
  >
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
        <h1 class="title is-4">Flex List</h1>
      </div>

      <Toolbar />
    </div>
    <div class="page-content-inner">
      <FlexListV3 />
    </div>
  </div>
</template>
