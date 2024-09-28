<script setup lang="ts">
import { VMarkdownEditorMeta } from '/@src/data/documentation/components-meta'

const pageTitle = useVueroContext<string>('page-title')
onMounted(() => {
  pageTitle.value = 'VMarkdownEditor'
})

useHead({
  title: 'VMarkdownEditor - Components - Vuero',
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
          label: 'VMarkdownEditor',
          to: '/components/markdown-editor',
        },
      ]"
    />

    <DocumentationTocContainer>
      <VMarkdownEditorBaseDocumentation />
      <VMarkdownEditorToolbarDocumentation />
      <VMarkdownEditorCustomPreviewDocumentation />

      <DocumentationMeta
        name="VMarkdownEditor"
        :meta="VMarkdownEditorMeta"
      />
    </DocumentationTocContainer>
  </div>
</template>
