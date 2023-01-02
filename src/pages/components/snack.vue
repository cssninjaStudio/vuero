<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VSnack')

useHead({
  title: 'VSnack - Components - Vuero',
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
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'VSnack',
          to: '/components/snack',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <!--VSnack base-->
        <VSnackBaseDocumentation />

        <!--VSnack white-->
        <VSnackWhiteDocumentation />

        <!--VSnack feather-->
        <VSnackFeatherDocumentation />

        <!--VSnack feather solid-->
        <VSnackFeatherSolidDocumentation />

        <!--VSnack fa-->
        <VSnackFaDocumentation />

        <!--VSnack fa solid-->
        <VSnackFaSolidDocumentation />

        <!--VSnack line-->
        <VSnackLineDocumentation />

        <!--VSnack line solid-->
        <VSnackLineSolidDocumentation />

        <!--VSnack small image-->
        <VSnackSmallImageDocumentation />

        <!--VSnack small icon-->
        <VSnackSmallIconDocumentation />

        <!--Props-->
        <VSnackPropsDocumentation />

        <!--Snack-->
        <VSnackSlotsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
