# Sideblock Layout

- Full height sidebar navigation
- Works well when having few navigation items

![Sideblock layout](https://media.cssninja.io/screenshots/vuero-demo/dark/starters/sideblock-blank-page-1.webp){.img-dark}
![Sideblock layout](https://media.cssninja.io/screenshots/vuero-demo/light/starters/sideblock-blank-page-1.webp){.img-light}



## `SideblockLayout` component

### Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `links` | Sideblock navigation items | `SideblockItem[]` | `[]` |
| `theme` | Sideblock variant | `SideblockTheme` | `default` |
| `size` | Max content width | `'default' \| 'large' \| 'wide' \| 'full'` | `'default'` |
| `openOnMounted` | Whether the sideblock should be open on mounted | `boolean` | `false` |
| `closeOnChange` | Whether the sideblock should be closed on page change | `boolean` | `false` |


### Slots

### Slots

- `default`
- `logo`
- `toolbar`
- `toolbar-mobile`
- `sideblock-title-mobile`
- `sideblock-links`
- `sideblock-links-mobile`
- `sideblock-end`
- `page-heading`
- `extra`


### Context

The `SideblockLayout` component expose a context object that can be used to control the sideblock programmatically. It use [provide/inject](https://vuejs.org/guide/components/provide-inject.html) under the hood.

In order to access this, you either need to use `useSideblockLayoutContext` composable, or via slot properties.

You can access layout context via slot properties:

:::code-group
```vue [src/layouts/my-layout.vue]
<template>
  <SideblockLayout>
    <slot />

    <template #page-heading="{ isDesktopSideblockOpen }">
      <VButton @click="isDesktopSideblockOpen = true">
        Open sideblock
      </VButton>
    </template>
  </SideblockLayout>
</template>
```
:::


Or via `useSideblockLayoutContext` composable (the component should be a child of `SideblockLayout`):

:::code-group
```vue [src/components/MyPageHeading.vue]
<script setup lang="ts">
import { useSideblockLayoutContext } from '/@src/components/layouts/sideblock/sideblock.context'

const { isDesktopSideblockOpen } = useSideblockLayoutContext()
</script>

<template>
  <VButton @click="isDesktopSideblockOpen = true">
    Open sideblock
  </VButton>
</template>
```
```vue [src/layouts/my-layout.vue]
<template>
  <SideblockLayout>
    <slot />

    <template #page-heading>
      <MyPageHeading />
    </template>
  </SideblockLayout>
```
:::


### Types

#### SideblockTheme

```ts
type SideblockTheme =
  | 'default'
  | 'curved'
  | 'color'
  | 'color-curved'
```

#### SideblockItem

```ts
type SideblockItem =
  | SideblockItemCollapse
  | SideblockItemLink
  | SideblockItemAction
  | SideblockItemComponent
  | SideblockItemDivider

interface SideblockItemCollapse {
  type: 'collapse'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  children: {
    label: string
    to: string
    icon?: string
    tag?: string
  }[]
}
interface SideblockItemLink {
  type: 'link'
  icon: string
  hideMobile?: boolean
  label?: string
  badge?: string | number

  to: string
}
interface SideblockItemAction {
  type: 'action'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string
  badge?: string | number

  onClick: (event: Event) => void
}
interface SideblockItemComponent {
  type: 'component'
  id: string
  hideMobile?: boolean
  label?: string

  component: string | Component | (() => VNode)
}
interface SideblockItemDivider {
  type: 'divider'
  label?: string
}
```

#### SideblockContext

```ts
interface SideblockLayoutContext {
  links: ComputedRef<SideblockItem[]>
  theme: ComputedRef<SideblockTheme>

  closeOnChange: ComputedRef<boolean>
  openOnMounted: ComputedRef<boolean>

  isMobileSideblockOpen: Ref<boolean>
  isDesktopSideblockOpen: Ref<boolean>
}
```