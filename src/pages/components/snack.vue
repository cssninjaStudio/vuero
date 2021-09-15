<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'VSnack'
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
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'VSnack',
          to: { name: 'components-snack' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
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
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
