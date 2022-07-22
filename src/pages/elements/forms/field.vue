<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VField')

useHead({
  title: 'VField - Elements - Vuero',
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
          to: { name: '/' },
        },
        {
          label: 'Elements',
          to: { name: '/elements/' },
        },
        {
          label: 'Forms',
        },
        {
          label: 'VField',
          to: { name: '/elements/forms/field' },
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <VFieldBaseDocumentation />
        <VFieldLabelInlineDocumentation />
        <VFieldIdTrackingDocumentation />
        <VFieldAddonEndDocumentation />
        <VFieldAddonStartDocumentation />
        <VFieldAddonRoundedDocumentation />
        <VFieldAddonDirectionalDocumentation />
        <VFieldPropsDocumentation />
        <VFieldSlotsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
