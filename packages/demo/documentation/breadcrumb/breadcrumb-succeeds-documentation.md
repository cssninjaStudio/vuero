---
breadcrumb:
  - label: Vuero
    hideLabel: true
    icon: lucide:home
    link: https://vuero.cssninja.io/
  - label: Components
    icon: lucide:cpu
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
    icon: 'lucide:home',
    // use external links
    link: 'https://vuero.cssninja.io/',
  },
  {
    label: 'Components',
    icon: 'lucide:cpu',
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
  <VBreadcrumb
    :items="breadcrumb"
    separator="succeeds"
    with-icons
  />
</template>
```

<!--/code-->

<!--example-->
<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="succeeds" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="succeeds" with-icons />
</div>

<!--/example-->
