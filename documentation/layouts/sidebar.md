---
outline: deep
---

# Sidebar Layout

- Full height sidebar navigation
- Works well when having a lot of navigation items

![Sidebar layout](https://media.cssninja.io/screenshots/vuero-demo/dark/starters/sidebar-blank-page-1.webp){.img-dark}
![Sidebar layout](https://media.cssninja.io/screenshots/vuero-demo/light/starters/sidebar-blank-page-1.webp){.img-light}


## `SidebarLayout` component

### Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `links` | Sidebar navigation items | `SidebarItem[]` | `[]` |
| `linksBottom` | Sidebar bottom navigation items | `SidebarItem[]` | `[]` |
| `theme` | Sidebar variant | `SidebarTheme` | `default` |
| `size` | Max content width | `'default' \| 'large' \| 'wide' \| 'full'` | `'default'` |
| `defaultSidebar` | Defaut item that will be selected | `string` | `''` |
| `openOnMounted` | Whether the sidebar should be open on mounted | `boolean` | `false` |
| `closeOnChange` | Whether the sidebar should be closed on page change | `boolean` | `false` |

### Slots

- `default`
- `logo`
- `toolbar`
- `toolbar-mobile`
- `sidebar-links`
- `sidebar-links-bottom`
- `sidebar-links-mobile`
- `sidebar-links-bottom-mobile`
- `subsidebar-title`
- `subsidebar-title-mobile`
- `page-heading`
- `extra`

### Context

The `SidebarLayout` component expose a context object that can be used to control the sidebar programmatically. It use [provide/inject](https://vuejs.org/guide/components/provide-inject.html) under the hood.

In order to access this, you either need to use `useSidebarLayoutContext` composable, or via slot properties.

You can access layout context via slot properties:

:::code-group
```vue [src/layouts/my-layout.vue]
<template>
  <SidebarLayout>
    <slot />

    <template #page-heading="{ toggleSubsidebar }">
      <VButton @click="toggleSubsidebar('my-subsidebar-id')">
        Open sidebar
      </VButton>
    </template>
  </SidebarLayout>
</template>
```
:::


Or via `useSidebarLayoutContext` composable (the component should be a child of `SidebarLayout`):

:::code-group
```vue [src/components/MyPageHeading.vue]
<script setup lang="ts">
import { useSidebarLayoutContext } from '/@src/components/layouts/sidebar/sidebar.context'

const { toggleSubsidebar } = useSidebarLayoutContext()
</script>

<template>
  <VButton @click="toggleSubsidebar('my-subsidebar-id')">
    Open sidebar
  </VButton>
</template>
```
```vue [src/layouts/my-layout.vue]
<template>
  <SidebarLayout>
    <slot />

    <template #page-heading>
      <MyPageHeading />
    </template>
  </SidebarLayout>
```
:::



### Types

#### SidebarTheme

```ts
type SidebarTheme =
  | 'default'
  | 'color'
  | 'color-curved'
  | 'curved'
  | 'float'
  | 'labels'
  | 'labels-hover'
```


#### SidebarItem

```ts
type SidebarItem =
  | SidebarItemSubsidebar
  | SidebarItemLink
  | SidebarItemAction
  | SidebarItemComponent

interface SidebarItemSubsidebar {
  type: 'subsidebar'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  subsidebar: {
    label: string
    items: SubsidebarItem[]
  }
}
interface SidebarItemLink {
  type: 'link'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  to: string
}
interface SidebarItemAction {
  type: 'action'
  id: string
  icon: string
  hideMobile?: boolean
  label?: string

  onClick: (event: Event) => void
}
interface SidebarItemComponent {
  type: 'component'
  id: string
  hideMobile?: boolean
  label?: string

  component: string | Component | (() => VNode)
}
```

#### SubsidebarItem

```ts
type SubsidebarItem =
  | SubsidebarItemCollapse
  | SubsidebarItemLink
  | SubsidebarItemDivider

interface SubsidebarItemCollapse {
  type: 'collapse'
  id: string
  label: string
  children: {
    label: string
    to: string
    icon?: string
    tag?: string | number
  }[]
}
interface SubsidebarItemLink {
  type: 'link'
  label: string
  to: string
  tag?: string | number
}
interface SubsidebarItemDivider {
  type: 'divider'
  label?: string
}
```


#### SidebarContext

```ts
interface SidebarLayoutContext {
  links: ComputedRef<SidebarItem[]>
  linksBottom: ComputedRef<SidebarItem[]>
  theme: ComputedRef<SidebarTheme>

  defaultSidebar: ComputedRef<string>
  closeOnChange: ComputedRef<boolean>
  openOnMounted: ComputedRef<boolean>

  isMobileSidebarOpen: Ref<boolean>
  isDesktopSidebarOpen: Ref<boolean>
  activeSubsidebarId: Ref<string>

  isOpen: ComputedRef<boolean>
  subsidebars: ComputedRef<SidebarItemSubsidebar[]>
  activeSubsidebar: ComputedRef<SidebarItemSubsidebar | undefined>

  toggleSubsidebar: (id: string) => void
}
```
