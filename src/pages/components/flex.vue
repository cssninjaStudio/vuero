<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'VFlex'
useHead({
  title: 'VFlex - Components - Vuero',
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
          label: 'VFlex',
          to: { name: 'components-flex' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--VFlex-->
        <VFlexBaseDocumentation />

        <!--VFlex Props -->
        <VFlexPropsDocumentation />
        <!--VFlexItem Props -->
        <VFlexItemPropsDocumentation />
        <!--VFlex Slots -->
        <VFlexSlotsDocumentation />
        <!--VFlexItem Slots -->
        <VFlexItemSlotsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
