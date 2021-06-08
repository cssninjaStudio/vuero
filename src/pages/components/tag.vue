<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-Tag'
useHead({
  title: 'V-Tag - Components - Vuero',
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
          label: 'V-Tag',
          to: { name: 'components-tag' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--V-Tag base-->
        <VTagBaseDocumentation />

        <!--V-Tag rounded-->
        <VTagRoundedDocumentation />

        <!--V-Tag curved-->
        <VTagCurvedDocumentation />

        <!--V-Tag Outlined-->
        <VTagOutlinedDocumentation />

        <!--V-Tag Elevated-->
        <VTagElevatedDocumentation />

        <!--V-Tag addons-->
        <VTagAddonsDocumentation />

        <!--V-Tag list-->
        <VTagListDocumentation />

        <!--Props-->
        <VTagPropsDocumentation />

        <!--Props-->
        <VTagsPropsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
