<script setup lang="ts">
import { demoMarkdown } from '/@src/data/documentation/markdown'
import { VMarkdownPreviewMeta } from '/@src/data/documentation/components-meta'

const markdownContainer = ref<HTMLElement>()
const toc = useMarkdownToc(markdownContainer)
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VMarkdownPreview'
})

useHead({
  title: 'VMarkdownPreview - Components - Vuero',
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
          <div
            class="card-inner"
            :class="{ 'is-scrolling': isScrolling }"
          >
            <VMarkdownPreview
              size="medium"
              max-width="small"
              :source="demoMarkdown"
            />
          </div>
        </DocumentationDemoCard>

        <DocumentationMeta
          name="VMarkdownPreview"
          :meta="VMarkdownPreviewMeta"
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
