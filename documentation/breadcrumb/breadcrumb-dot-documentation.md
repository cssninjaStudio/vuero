---
breadcrumb:
  - label: Vuero
    hideLabel: true
    icon: feather:home
    link: https://vuero.cssninja.io/
  - label: Components
    icon: feather:cpu
    to:
      name: /components/
  - label: VBreadcrumb
---

### Dot Separator

Breadcrumb items can be separated by alternative separators.
To display dot breadcrumb separators, set the `separator` prop to `dot`.
See markup for more details.

<!--code-->

```vue
<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Vuero',
    hideLabel: true,
    icon: 'feather:home',
    // use external links
    link: 'https://vuero.cssninja.io/',
  },
  {
    label: 'Components',
    icon: 'feather:cpu',
    // or generate a router link with 'to' props
    to: '/components/',
  },
  {
    label: 'VBreadcrumb',
  },
]
</script>

<template>
  <VBreadcrumb :items="breadcrumb" separator="dot" />
  <VBreadcrumb :items="breadcrumb" separator="dot" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="dot" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="dot" with-icons />
</div>

<!--/example-->
