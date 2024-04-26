---
state:
  markdown: '## Hello Vuero
  
  
  This is a **Markdown** preview content.'
---

<!--lint disable list-item-spacing-->

### VMarkdownPreview

Vuero ship `<VMarkdownPreview />` component that converts Markdown source code
to HTML and highlights code blocks using shiki.

This component uses [`unifiedjs`](https://github.com/unifiedjs/unified),
a powerful toolkit for processing and manipulating text and markdown files,
to parse and transform the Markdown source code.
unifiedjs has a number of benefits, including:

- Support for a wide range of plugins that enable additional functionality,  
  such as syntax highlighting and code formatting.
- Extensibility, allowing developers to create custom plugins
  to meet their specific needs

[`shiki`](https://github.com/shikijs/shiki) is a high-performance syntax
highlighting library that is used to add syntax highlighting
to code blocks in the generated HTML. Some benefits of using shiki include:

- Fast and lightweight, with a small bundle size
- Supports a wide range of programming languages
- Customizable, allowing developers to choose from a
  variety of color schemes and styles

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## Hello Vuero\n\nThis is a **Markdown** preview content.')
</script>

<template>
  <VFlex column-gap="1rem">
    <VFlexItem flex-grow="1">
      <VField>
        <VControl>
          <VTextarea v-model="markdown" autogrow />
        </VControl>
      </VField>
    </VFlexItem>

    <VFlexItem flex-grow="1">
      <VMarkdownPreview :source="markdown" />
    </VFlexItem>
  </VFlex>
</template>
```

<!--/code-->

<!--example-->

<VFlex column-gap="1rem">
  <VFlexItem flex-grow="1">
    <VField>
      <VControl>
        <VTextarea v-model="frontmatter.state.markdown" autogrow />
      </VControl>
    </VField>
  </VFlexItem>
  <VFlexItem flex-grow="1">
    <VMarkdownPreview :source="frontmatter.state.markdown" />
  </VFlexItem>
</VFlex>

<!--/example-->
