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

### Default Separator

Vuero provides a `<VBreadcrumb />` component.
Default breadcrumb items are separated by a slash sign.
To show icons, use the `with-icons` prop. You can also change the alignment
by using the `align` prop (possible values are `center` and `right`).
Pass an **Array** to the `items` prop to render the component.
See markup for more details about usage.

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
  <VBreadcrumb :items="breadcrumb" />
  <VBreadcrumb :items="breadcrumb" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <VBreadcrumb :items="frontmatter.breadcrumb" />
  <VBreadcrumb :items="frontmatter.breadcrumb" with-icons />
</div>

<!--/example-->
