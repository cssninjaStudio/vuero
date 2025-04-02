---
outline: deep
---

# Navsearch Layout

![Navsearch layout](https://media.cssninja.io/screenshots/vuero-demo/dark/starters/navbar-blank-page-6.webp){.img-dark}
![Navsearch layout](https://media.cssninja.io/screenshots/vuero-demo/light/starters/navbar-blank-page-6.webp){.img-light}

## `NavsearchLayout` component

### Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `links` | Navsearch navigation items | `NavsearchItem[]` | `[]` |
| `theme` | Navsearch variant | `NavsearchTheme` | `default` |
| `scrollBehavior` | Navsearch behavior when scrolling | `NavsearchScrollBehavior` | `fixed` |
| `size` | Max content width | `'default' \| 'large' \| 'wide' \| 'full'` | `'default'` |

### Slots

- `default`
- `logo`
- `toolbar`
- `toolbar-mobile`
- `navbar-title`
- `navbar-content`
- `subnav-start`
- `subnav-links`
- `subnav-links-mobile`
- `subnav-end`
- `page-heading`
- `extra`

### Context


The `NavsearchLayout` component expose a context object that can be used to control the navsearch programmatically. It use [provide/inject](https://vuejs.org/guide/components/provide-inject.html) under the hood.

In order to access this, you either need to use `useNavsearchLayoutContext` composable, or via slot properties.

You can access layout context via slot properties:

:::code-group
```vue [src/layouts/my-layout.vue]
<template>
  <NavsearchLayout>
    <slot />

    <template #subnav-links-mobile="{ isMobileSidebarOpen }">
      <VButton @click="isMobileSidebarOpen = false">
        Close sidebar
      </VButton>
    </template>
  </NavsearchLayout>
</template>
```
:::


Or via `useNavsearchLayoutContext` composable (the component should be a child of `NavsearchLayout`):

:::code-group
```vue [src/components/MySubnavMobile.vue]
<script setup lang="ts">
import { useNavsearchLayoutContext } from '/@src/components/layouts/navbar/navbar.context'

const { isMobileSidebarOpen } = useNavsearchLayoutContext()
</script>

<template>
  <VButton @click="isMobileSidebarOpen = false">
    Close sidebar
  </VButton>
</template>
```
```vue [src/layouts/my-layout.vue]
<template>
  <NavsearchLayout>
    <slot />

    <template #subnav-links-mobile>
      <MySubnavMobile />
    </template>
  </NavsearchLayout>
```
:::


### Types

#### NavsearchTheme

```ts
type NavsearchTheme =
  | 'default'
  | 'fade'
```

#### NavsearchScrollBehavior

```ts
type NavsearchScrollBehavior =
  | 'reveal'
  | 'shrink'
  | 'fixed'
```


#### NavsearchItem

```ts
interface NavsearchItem {
  to: string
  label: string
}
```

#### NavsearchLayoutContext

```ts
interface NavsearchLayoutContext {
  theme: ComputedRef<NavsearchTheme>
  scrollBehavior: ComputedRef<NavsearchScrollBehavior>
  links: ComputedRef<NavsearchItem[]>

  isMobileSidebarOpen: Ref<boolean>
}
```
