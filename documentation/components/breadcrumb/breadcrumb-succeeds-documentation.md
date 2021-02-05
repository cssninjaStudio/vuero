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
  <V-Breadcrumb :items="breadcrumb" separator="succeeds" />
  <V-Breadcrumb :items="breadcrumb" separator="succeeds" with-icons />
</template>
```

<!--/code-->

<!--example-->
<div>
  <V-Breadcrumb :items="frontmatter.breadcrumb" separator="succeeds" />
  <V-Breadcrumb :items="frontmatter.breadcrumb" separator="succeeds" with-icons />
</div>

<!--/example-->
