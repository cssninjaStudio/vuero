<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VButton')

useHead({
  title: 'VButton - Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Elements',
          to: '/elements/',
        },
        {
          label: 'Buttons',
        },
        {
          label: 'VButton',
          to: '/elements/button',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--VButton base-->
        <VButtonBaseDocumentation />

        <!--VButton link-->
        <VButtonLinkDocumentation />

        <!--VButton colors-->
        <VButtonColorsDocumentation />

        <!--VButton light colors-->
        <VButtonColorsLightDocumentation />

        <!--VButton outlined colors-->
        <VButtonColorsOutlinedDocumentation />

        <!--VButton placeload-->
        <VButtonPlaceloadDocumentation />

        <!--VButton Elevation-->
        <VButtonElevatedDocumentation />

        <!--VButton Disabled-->
        <VButtonDisabledDocumentation />

        <!--VButton Font Awesome-->
        <VButtonFaDocumentation />

        <!--VButton Feather-->
        <VButtonFeatherDocumentation />

        <!--VButton Group-->
        <VButtonGroupDocumentation />

        <!--VButton Addons-->
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
