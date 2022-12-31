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

### Arrow Separator

Breadcrumb items can be separated by alternative separators.
To display arrow breadcrumb separators,
set the `separator` prop to `arrow`. See markup for more details.

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
  <VBreadcrumb :items="breadcrumb" separator="arrow" />
  <VBreadcrumb :items="breadcrumb" separator="arrow" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="arrow" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="arrow" with-icons />
</div>

<!--/example-->
