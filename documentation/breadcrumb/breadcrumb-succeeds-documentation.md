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

### Succeeds Separator

Breadcrumb items can be separated by alternative separators.
To display succeeds breadcrumb separators,
set the `separator` prop to `succeeds`. See markup for more details.

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
  <VBreadcrumb :items="breadcrumb" separator="succeeds" />
  <VBreadcrumb :items="breadcrumb" separator="succeeds" with-icons />
</template>
```

<!--/code-->

<!--example-->
<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="succeeds" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="succeeds" with-icons />
</div>

<!--/example-->
