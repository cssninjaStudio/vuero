<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-SwitchBlock'
useHead({
  title: 'V-SwitchBlock - Switches Elements - Vuero',
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
          label: 'Switches',
        },
        {
          label: 'V-SwitchBlock',
          to: { name: 'elements-switch-block' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--Switch-->
        <SwitchBlockDocumentation />

        <!--Thin Switch-->
        <SwitchBlockThinDocumentation />

        <!--Switch Block-->
        <SwitchBlockLabelDocumentation />

        <!--Switch Block Thin-->
        <SwitchBlockThinLabelDocumentation />

        <!--Props-->
        <SwitchBlockPropsDocumentation />

        <!--Events-->
        <SwitchBlockEventsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
