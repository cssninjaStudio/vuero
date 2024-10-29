<script setup lang="ts">
const markdown = useTemplateRef<HTMLElement>('markdown')
const toc = useMarkdownToc(markdown)
</script>

<template>
  <div class="columns">
    <div
      ref="markdown"
      :class="[toc.length > 0 ? 'is-9' : 'is-12']"
      class="column doc-column stay-focus-container"
    >
      <slot />
    </div>
    <div
      v-if="toc.length"
      class="column is-3 toc-column"
    >
      <DocumentationToc :toc="toc" />
    </div>
  </div>
</template>
