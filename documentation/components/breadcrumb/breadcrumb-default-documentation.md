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

### Default Separator

Vuero provides a `<V-Breadcrumb />` component.
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
  <V-Breadcrumb :items="breadcrumb" />
  <V-Breadcrumb :items="breadcrumb" with-icons />
</template>
```

<!--/code-->

<!--example-->

<div>
  <V-Breadcrumb :items="frontmatter.breadcrumb" />
  <V-Breadcrumb :items="frontmatter.breadcrumb" with-icons />
</div>

<!--/example-->
