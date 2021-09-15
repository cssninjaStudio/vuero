<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { popovers } from '/@src/data/users/userPopovers'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'VPlaceholderPage'
useHead({
  title: 'VPlaceholderPage - Components - Vuero',
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
          label: 'VPlaceholderPage',
          to: { name: 'components-placeholder-page' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column"
      >
        <VPlaceholderPage
          title="We couldn't find any matching results."
          subtitle="Too bad. Looks like we couldn't find any matching results for the
            search terms you've entered. Please try different search terms or
            criteria."
          larger
        >
          <template #image>
            <img
              class="light-image"
              src="/@src/assets/illustrations/placeholders/search-1.svg"
              alt=""
            />
            <img
              class="dark-image"
              src="/@src/assets/illustrations/placeholders/search-1-dark.svg"
              alt=""
            />
          </template>
          <template #action>
            <VButtons align="centered">
              <VButton>Go to the catalog</VButton>
              <VButton color="primary">Search everywhere</VButton>
            </VButtons>
          </template>
        </VPlaceholderPage>

        <div class="pt-6">
          <VPlaceholderPagePropsDocumentation />

          <VPlaceholderPageSlotsDocumentation />
        </div>
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
