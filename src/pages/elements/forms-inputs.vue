<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'Inputs'
useHead({
  title: 'Inputs - Forms Elements - Vuero',
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
          label: 'Inputs',
          to: { name: 'elements-forms-inputs' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <!--Input-->
        <InputBasicDocumentation />

        <!--Help Text-->
        <InputHelpDocumentation />

        <!--Rounded Input-->
        <InputRoundedDocumentation />

        <!--Focus Colors-->
        <InputFocusDocumentation />

        <!--Font Awesome-->
        <InputFaDocumentation />

        <!--Line Icons-->
        <InputLineDocumentation />

        <!--Feather Icons-->
        <InputFeatherDocumentation />

        <!--Loading State-->
        <InputLoadingDocumentation />

        <!--Disabled Input-->
        <InputDisabledDocumentation />

        <!--Validation-->
        <InputValidationDocumentation />

        <!--Validation rounded-->
        <InputValidationRoundedDocumentation />
      </div>

      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
