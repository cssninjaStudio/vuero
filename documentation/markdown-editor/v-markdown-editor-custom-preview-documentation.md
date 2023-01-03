---
markdown: '## Hello Vuero


This is a **Markdown** preview content.'
---

### Custom preview

You can use the `preview` slot to customize how the preview is rendered.

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## Hello Vuero\n\nThis is a **Markdown** preview content.')
</script>

<template>
  <VMarkdownEditor v-model="markdown" autogrow>
    <!-- Display content after the textarea -->
    <template #after-textarea>
      <p class="help is-flex is-align-items-center">
        <VIcon icon="feather:info" class="is-size-6" />
        <span class="ml-1">Markdown syntax supported</span>
      </p>
    </template>

    <!-- Custom preview -->
    <template #preview="{ value }">
      <VCard class="mb-4">
        <pre>{{ value }}</pre>
      </VCard>

      <VCard radius="smooth">
        <VMarkdownPreview :source="value" size="medium" max-width="small" />
      </VCard>
    </template>
  </VMarkdownEditor>
</template>
```

<!--/code-->

<!--example-->

<VMarkdownEditor v-model="frontmatter.markdown" autogrow>
  <template #after-textarea>
    <p class="help is-flex is-align-items-center">
      <VIcon icon="feather:info" class="is-size-6" />
      <span class="ml-1">Markdown syntax supported</span>
    </p>
  </template>
  <template #preview="{ value }">
    <VCard class="mb-4">
      <pre>{{ value }}</pre>
    </VCard>
    <VCard radius="smooth">
      <VMarkdownPreview :source="value" :size="medium" :max-width="small" />
    </VCard>
  </template>
</VMarkdownEditor>

<!--/example-->
