<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'Input Addons'
useHead({
  title: 'Input Addons - Forms Elements - Vuero',
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
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'Forms',
        },
        {
          label: 'Input Addons',
          to: { name: 'elements-forms-addons' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--End Addon-->
        <AddonEndDocumentation />

        <!--Start Addon-->
        <AddonStartDocumentation />

        <!--Addon Colors-->
        <AddonColorsDocumentation />

        <!--Rounded Addons-->
        <AddonRoundedDocumentation />

        <!--Bi Directional-->
        <AddonDirectionalDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
