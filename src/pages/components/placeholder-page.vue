<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { ref } from 'vue'
import useMarkdownToc from '/@src/composable/useMarkdownToc'
import { popovers } from '/@src/data/users/userPopovers'
import { pageTitle } from '/@src/state/sidebarLayoutState'

const markdownContainer = ref<HTMLElement | null>(null)
const toc = useMarkdownToc(markdownContainer)

pageTitle.value = 'V-PlaceholderPage'
useHead({
  title: 'V-PlaceholderPage - Components - Vuero',
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
          label: 'V-PlaceholderPage',
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
        <V-PlaceholderPage
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
            <V-Buttons align="centered">
              <V-Button>Go to the catalog</V-Button>
              <V-Button color="primary">Search everywhere</V-Button>
            </V-Buttons>
          </template>
        </V-PlaceholderPage>

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
