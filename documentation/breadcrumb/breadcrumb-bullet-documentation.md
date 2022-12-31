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

### Bullet Separator

Breadcrumb items can be separated by alternative separators.
To display bullet breadcrumb separators,
set the `separator` prop to `bullet`. See markup for more details.

<!--code-->

```vue
<script setup lang="ts">
const breadcrumb = [
  {
    icon: 'feather:home',
    hideLabel: true,
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
  <VBreadcrumb :items="breadcrumb" separator="bullet" />
  <VBreadcrumb :items="breadcrumb" separator="bullet" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="bullet" />
  <VBreadcrumb :items="frontmatter.breadcrumb" separator="bullet" with-icons />
</div>

<!--/example-->
