<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import useMakrdownToc from '/@src/composable/useMarkdownToc'
import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'V-Button - Components - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
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
        <h1 class="title is-4">V-Button</h1>
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
            label: 'V-Button',
            to: { name: 'components-button' },
          },
        ]"
      />

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--V-Button base-->
          <VButtonBaseDocumentation />

          <!--V-Button link-->
          <VButtonLinkDocumentation />

          <!--V-Button colors-->
          <VButtonColorsDocumentation />

          <!--V-Button light colors-->
          <VButtonColorsLightDocumentation />

          <!--V-Button outlined colors-->
          <VButtonColorsOutlinedDocumentation />

          <!--V-Button Elevation-->
          <VButtonElevatedDocumentation />

          <!--V-Button Disabled-->
          <VButtonDisabledDocumentation />

          <!--V-Button Font Awesome-->
          <VButtonFaDocumentation />

          <!--V-Button Feather-->
          <VButtonFeatherDocumentation />

          <!--V-Button Group-->
          <VButtonGroupDocumentation />

          <!--V-Button Addons-->
          <VButtonAddonsDocumentation />

          <!--V-Action-->
          <VButtonActionDocumentation />
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>
