<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-Snack'
useHead({
  title: 'V-Snack - Components - Vuero',
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
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'V-Snack',
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
        <!--V-Snack base-->
        <VSnackBaseDocumentation />

        <!--V-Snack white-->
        <VSnackWhiteDocumentation />

        <!--V-Snack feather-->
        <VSnackFeatherDocumentation />

        <!--V-Snack feather solid-->
        <VSnackFeatherSolidDocumentation />

        <!--V-Snack fa-->
        <VSnackFaDocumentation />

        <!--V-Snack fa solid-->
        <VSnackFaSolidDocumentation />

        <!--V-Snack line-->
        <VSnackLineDocumentation />

        <!--V-Snack line solid-->
        <VSnackLineSolidDocumentation />

        <!--V-Snack small image-->
        <VSnackSmallImageDocumentation />

        <!--V-Snack small icon-->
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
