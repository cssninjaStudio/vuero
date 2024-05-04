<script setup lang="ts">
import { VDropdownMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

useVueroContext({
  pageTitle: 'VDropdown',
})

useHead({
  title: 'VDropdown - Elements - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
          to: '/',
        },
        {
          label: 'Elements',
          to: '/components/',
        },
        {
          label: 'VDropdown',
          to: '/components/dropdown',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
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

        <DocumentationMeta
          name="VDropdown"
          :meta="VDropdownMeta"
        />

        <!--Artificial Spacing-->
        <div class="demo-spacer" />
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
