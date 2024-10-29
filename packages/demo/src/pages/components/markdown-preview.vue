<script setup lang="ts">
import { VMarkdownPreviewMeta } from '/@src/data/documentation/components-meta'
import { demoMarkdown } from '/@src/data/documentation/markdown'

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

    <DocumentationTocContainer>
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
    </DocumentationTocContainer>
  </div>
</template>
