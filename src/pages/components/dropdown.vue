<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

import useMakrdownToc from '/@src/composable/useMarkdownToc'
import { activeSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

useHead({
  title: 'V-Dropdown - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="activeSidebar = 'components'"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">V-Dropdown</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <V-Breadcrumb
        with-icons
        separator="bullet"
        :items="[
          {
            label: 'Vuero',
            hideLabel: true,
            icon: 'feather:home',
            to: { name: 'index' },
          },
          {
            label: 'Components',
            to: { name: 'components' },
          },
          {
            label: 'V-Dropdown',
            to: { name: 'components-dropdown' },
          },
        ]"
      />

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--Dropdown-->
          <DropdownDocumentation />

          <!--Dropdown-->
          <DropdownColorsDocumentation />

          <!--Dropdown-->
          <DropdownButtonSlotDocumentation />

          <!--Dropdown-->
          <DropdownButtonHoverDocumentation />

          <!--Dropdown-->
          <DropdownModernDocumentation />

          <!--Dropdown-->
          <DropdownWithIconsDocumentation />

          <!--Dropdown-->
          <DropdownWithImagesDocumentation />

          <!--Artificial Spacing-->
          <div class="demo-spacer"></div>
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
