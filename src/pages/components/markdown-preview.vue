<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useMarkdownToc } from '/@src/composable/useMarkdownToc'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { demoMarkdown } from '/@src/data/documentation/markdown'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('VMarkdownPreview')

useHead({
  title: 'VMarkdownPreview - Components - Vuero',
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
          to: '/',
        },
        {
          label: 'Components',
          to: '/components/',
        },
        {
          label: 'VMarkdownPreview',
          to: '/components/markdown-preview',
        },
      ]"
    />

    <div class="columns">
      <div
        ref="markdownContainer"
        :class="[toc.length > 0 ? 'is-9' : 'is-12']"
        class="column doc-column stay-focus-container"
      >
        <VMarkdownPreviewBaseDocumentation />
        <DocumentationDemoCard class="mt-4">
          <div class="card-inner" :class="{ 'is-scrolling': isScrolling }">
            <VMarkdownPreview
              size="medium"
              max-width="small"
              :placeholder="{ height: '500px' }"
              :source="demoMarkdown"
            />
          </div>
        </DocumentationDemoCard>

        <VMarkdownPreviewPropsDocumentation />
      </div>
      <div v-if="toc.length" class="column is-3 toc-column">
        <DocumentationToc :toc="toc" />
      </div>
    </div>
  </div>
</template>
