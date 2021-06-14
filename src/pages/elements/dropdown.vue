<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-Dropdown'
useHead({
  title: 'V-Dropdown - Elements - Vuero',
})
</script>

<template>
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
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'V-Dropdown',
          to: { name: 'elements-dropdown' },
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

        <!--Props-->
        <DropdownPropsDocumentation />

        <!--Slots-->
        <DropdownSlotsDocumentation />

        <!--Expose-->
        <DropdownExposeDocumentation />

        <!--Artificial Spacing-->
        <div class="demo-spacer"></div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
