---
state:
  markdown: '## Hello Vuero
  
  
  This is a **Markdown** preview content.'
---

<!--lint disable list-item-spacing-->

### VMarkdownEditor

Vuero ship `<VMarkdownEditor />` component that combines an accessible
Markdown editor with a live preview using `<VMarkdownPreview />`.

Under the hood, this component uses [`textarea-markdown-editor`](https://github.com/Resetand/textarea-markdown-editor)
exposed api to provide a powerfull Markdown editor for vue 3 with
extendable commands support.

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## Hello Vuero\n\nThis is a **Markdown** preview content.')
</script>

<template>
  <VMarkdownEditor v-model="markdown" autogrow />
</template>
```

<!--/code-->

<!--example-->

<VMarkdownEditor v-model="frontmatter.state.markdown" autogrow />

<!--/example-->
