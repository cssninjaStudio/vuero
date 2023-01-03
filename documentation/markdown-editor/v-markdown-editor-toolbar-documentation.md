---
state:
  markdown: '## Hello Vuero
  
  
  This is a **Markdown** preview content.'
---

### Toolbar customization

Toolbar can be customized by passing a `toolbar` property.
You can group commands to display them in a dropdown menu.

Actions can be one of `bold`, `italic`, `strike-through`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `unordered-list`, `ordered-list`, `code-block`, `code-inline`, `code`, `link`, `image`, `block-quotes`

You also can pass a custom action to the toolbar by passing a function to the `action` property.

<!--code-->

```vue
<script setup lang="ts">
const markdown = ref('## Hello Vuero\n\nThis is a **Markdown** preview content.')

const toolbar = ref({
  custom: {
    label: 'Custom',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    action: ({ textarea, trigger, cursor, value }) => {
      markdown.value = value.replace('Markdown', 'Custom action')
    },
  },
  text: {
    label: 'Text',
    children: {
      bold: {
        icon: 'ph:text-bolder',
        tooltip: 'Bold (Ctrl + B)',
        action: 'bold',
      },
      italic: {
        icon: 'ph:text-italic',
        tooltip: 'Italic (Ctrl + I)',
        action: 'italic',
      },
      'strike-through': {
        icon: 'ph:text-strikethrough',
        tooltip: 'Strike Through (Ctrl + Shift + X)',
        action: 'strike-through',
      },
      link: {
        icon: 'ci:link',
        tooltip: 'Link',
        action: 'link',
      },
      'code-inline': {
        icon: 'ci:code',
        tooltip: 'Code Inline',
        action: 'code-inline',
      },
    },
  },
  headings: {
    icon: 'ph:text-h',
    tooltip: 'Headings',
    vertical: true,
    children: {
      h1: {
        icon: 'ph:text-h-one',
        tooltip: 'H1',
        action: 'h1',
      },
      h2: {
        icon: 'ph:text-h-two',
        tooltip: 'H2',
        action: 'h2',
      },
      h3: {
        icon: 'ph:text-h-three',
        tooltip: 'H3',
        action: 'h3',
      },
      h4: {
        icon: 'ph:text-h-four',
        tooltip: 'H4',
        action: 'h4',
      },
      h5: {
        icon: 'ph:text-h-five',
        tooltip: 'H5',
        action: 'h5',
      },
      h6: {
        icon: 'ph:text-h-six',
        tooltip: 'H6',
        action: 'h6',
      },
    },
  },
  lists: {
    icon: 'ph:list',
    label: 'Lists',
    vertical: true,
    children: {
      'unordered-list': {
        icon: 'ph:list-bullets',
        label: 'Unordered',
        action: 'unordered-list',
      },
      'ordered-list': {
        icon: 'ph:list-numbers',
        label: 'Ordered',
        action: 'ordered-list',
      },
    },
  },
  more: {
    icon: 'ph:dots-three-outline-vertical',
    tooltip: 'More',
    vertical: true,
    children: {
      'code-block': {
        icon: 'ph:terminal-window',
        tooltip: 'Code Block',
        action: 'code-block',
      },
      image: {
        icon: 'ph:image',
        tooltip: 'Image',
        action: 'image',
      },
      'block-quotes': {
        icon: 'ph:quotes',
        tooltip: 'Block Quotes',
        action: 'block-quotes',
      },
    },
  },
})
</script>

<template>
  <VMarkdownEditor v-model="markdown" :toolbar="toolbar" />
</template>
```

<!--/code-->

<!--example-->

<VMarkdownEditor v-model="frontmatter.state.markdown" :toolbar="{
  custom: {
    label: 'Custom',
    action: ({ textarea, trigger, cursor, value }) => {
      frontmatter.state.markdown = value.replace('Markdown', 'Custom action')
    },
  },
  text: {
    label: 'Text',
    children: {
      bold: {
        icon: 'ph:text-bolder',
        tooltip: 'Bold (Ctrl + B)',
        action: 'bold',
      },
      italic: {
        icon: 'ph:text-italic',
        tooltip: 'Italic (Ctrl + I)',
        action: 'italic',
      },
      'strike-through': {
        icon: 'ph:text-strikethrough',
        tooltip: 'Strike Through (Ctrl + Shift + X)',
        action: 'strike-through',
      },
      link: {
        icon: 'ci:link',
        tooltip: 'Link',
        action: 'link',
      },
      'code-inline': {
        icon: 'ci:code',
        tooltip: 'Code Inline',
        action: 'code-inline',
      },
    },
  },
  headings: {
    icon: 'ph:text-h',
    tooltip: 'Headings',
    vertical: true,
    children: {
      h1: {
        icon: 'ph:text-h-one',
        tooltip: 'H1',
        action: 'h1',
      },
      h2: {
        icon: 'ph:text-h-two',
        tooltip: 'H2',
        action: 'h2',
      },
      h3: {
        icon: 'ph:text-h-three',
        tooltip: 'H3',
        action: 'h3',
      },
      h4: {
        icon: 'ph:text-h-four',
        tooltip: 'H4',
        action: 'h4',
      },
      h5: {
        icon: 'ph:text-h-five',
        tooltip: 'H5',
        action: 'h5',
      },
      h6: {
        icon: 'ph:text-h-six',
        tooltip: 'H6',
        action: 'h6',
      },
    },
  },
  lists: {
    icon: 'ph:list',
    label: 'Lists',
    vertical: true,
    children: {
      'unordered-list': {
        icon: 'ph:list-bullets',
        label: 'Unordered',
        action: 'unordered-list',
      },
      'ordered-list': {
        icon: 'ph:list-numbers',
        label: 'Ordered',
        action: 'ordered-list',
      },
    },
  },
  more: {
    icon: 'ph:dots-three-outline-vertical',
    tooltip: 'More',
    vertical: true,
    children: {
      'code-block': {
        icon: 'ph:terminal-window',
        tooltip: 'Code Block',
        action: 'code-block',
      },
      image: {
        icon: 'ph:image',
        tooltip: 'Image',
        action: 'image',
      },
      'block-quotes': {
        icon: 'ph:quotes',
        tooltip: 'Block Quotes',
        action: 'block-quotes',
      },
    },
  },
}" />

<!--/example-->
