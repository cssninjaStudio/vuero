---
breadcrumb:
  - label: Vuero
    hideLabel: true
    icon: feather:home
    link: https://vuero.cssninja.io/
  - label: Components
    icon: feather:cpu
    to:
      name: components
  - label: V-Breadcrumb
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
    to: {
      name: 'components',
    },
  },
  {
    label: 'V-Breadcrumb',
  },
]
</script>

<template>
  <V-Breadcrumb :items="breadcrumb" separator="dot" />
  <V-Breadcrumb :items="breadcrumb" separator="dot" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-Breadcrumb :items="frontmatter.breadcrumb" separator="dot" />
  <V-Breadcrumb :items="frontmatter.breadcrumb" separator="dot" with-icons />
</div>

<!--/example-->
