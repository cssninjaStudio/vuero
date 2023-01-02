<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('vueform/slider')

useHead({
  title: 'vueform/slider - Addons - Vuero',
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
          label: 'Addons',
        },
        {
          label: 'vueform/slider',
          to: '/elements/addons/vueform-slider',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--Simple slider-->
        <SliderBaseDocumentation />

        <!--Squared tooltip-->
        <SliderSquaredDocumentation />

        <!--Curved tooltip-->
        <SliderCurvedDocumentation />

        <!--Slider colors-->
        <SliderColorDocumentation />

        <!--Multiple sliders-->
        <SliderMultipleDocumentation />

        <!--Tooltip format-->
        <SliderFormatDocumentation />

        <!--Slider Mergin-->
        <SliderMergingDocumentation />

        <div class="pb-6 mb-6"></div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
