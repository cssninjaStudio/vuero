<script setup lang="ts">
import { VPlaceloadTextMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)

useVueroContext({
  pageTitle: 'VPlaceloadText',
})

useHead({
  title: 'VPlaceloadText - Elements - Vuero',
})
</script>

<template>
  <div>
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'lucide:home',
          to: '/',
        },
        {
          label: 'Elements',
          to: '/components/',
        },
        {
          label: 'VPlaceloadText',
          to: '/components/placeload/text',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <PlaceloadTextBaseDocumentation />
        <PlaceloadTextSizeDocumentation />

        <DocumentationMeta
          name="VPlaceloadText"
          :meta="VPlaceloadTextMeta"
        />
      </div>
      <div
        v-if="toc.length"
        class="column is-3 toc-column"
      >
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
