<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-Button'
useHead({
  title: 'V-Button - Elements - Vuero',
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
          label: 'Buttons',
        },
        {
          label: 'V-Button',
          to: { name: 'elements-button' },
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

        <!--V-Button placeload-->
        <VButtonPlaceloadDocumentation />

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

        <!--Props-->
        <VButtonPropsDocumentation />

        <!--Slots-->
        <VButtonSlotsDocumentation />

        <!--Buttons Props-->
        <VButtonsPropsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
