---
outline: deep
---

# Navbar Layout

- Full width top navigation
- Dropdown for few navigation items
- Megamenu when lot of navigation items

![Navbar layout](https://media.cssninja.io/screenshots/vuero-demo/dark/starters/navbar-blank-page-1.png){.img-dark}
![Navbar layout](https://media.cssninja.io/screenshots/vuero-demo/light/starters/navbar-blank-page-1.png){.img-light}


## `NavbarLayout` component

### Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `links` | Navbar navigation items | `NavbarItem[]` | `[]` |
| `theme` | Navbar variant | `NavbarTheme` | `default` |
| `size` | Max content width | `'default' \| 'large' \| 'wide' \| 'full'` | `'default'` |

### Slots

- `default`
- `logo`
- `toolbar`
- `toolbar-mobile`
- `navbar-title`
- `navbar-title-mobile`
- `navbar-links`
- `navbar-links-mobile`
- `megamenu-start`
- `megamenu-end`
- `megamenu-top`
- `megamenu-bottom`
- `page-heading`
- `extra`

### Context


The `NavbarLayout` component expose a context object that can be used to control the navbar programmatically. It use [provide/inject](https://vuejs.org/guide/components/provide-inject.html) under the hood.

In order to access this, you either need to use `useNavbarLayoutContext` composable, or via slot properties.

You can access layout context via slot properties:

:::code-group
```vue [src/layouts/my-layout.vue]
<template>
  <NavbarLayout>
    <slot />

    <template #page-heading="{ toggleSubnav }">
      <VButton @click="toggleSubnav('my-subnav-id')">
        Open subnav
      </VButton>
    </template>
  </NavbarLayout>
</template>
```
:::


Or via `useNavbarLayoutContext` composable (the component should be a child of `NavbarLayout`):

:::code-group
```vue [src/components/MyPageHeading.vue]
<script setup lang="ts">
import { useNavbarLayoutContext } from '/@src/components/layouts/navbar/navbar.context'

const { toggleSubnav } = useNavbarLayoutContext()
</script>

<template>
  <VButton @click="toggleSubnav('my-subnav-id')">
    Open subnav
  </VButton>
</template>
```
```vue [src/layouts/my-layout.vue]
<template>
  <NavbarLayout>
    <slot />

    <template #page-heading>
      <MyPageHeading />
    </template>
  </NavbarLayout>
```
:::

### Types

#### NavbarTheme

```ts
type NavbarTheme = 
  | 'default'
  | 'colored'
  | 'fade'
```

#### NavbarItem

```ts
type NavbarItem =
  | NavbarItemMegamenu
  | NavbarItemDropdown
  | NavbarItemAction
  | NavbarItemLink

interface NavbarItemMegamenu {
  type: 'megamenu'
  label: string
  id: string
  icon: string

  children: NavbarMegamenu[]
}
interface NavbarItemDropdown {
  type: 'dropdown'
  label: string
  id: string
  icon: string

  children: NavbarDropdown[]
}
interface NavbarItemAction {
  type: 'action'
  label: string
  icon: string
  onClick: (event: Event) => void
}
interface NavbarItemLink {
  type: 'link'
  label: string
  icon: string
  to: string
}
```

#### NavbarMegamenu

```ts
interface NavbarMegamenu {
  id: string
  label: string
  icon: string
  children: NavbarMegamenuLink[]
}
interface NavbarMegamenuLink {
  label: string
  to: string
  tag?: string | number
}
```

#### NavbarDropdown

```ts
interface NavbarDropdown {
  label: string
  to: string
  icon: string
}
```

#### NavbarLayoutContext

```ts
interface NavbarLayoutContext {
  theme: ComputedRef<NavbarTheme>
  links: ComputedRef<NavbarItem[]>

  isMobileSidebarOpen: Ref<boolean>
  activeMobileSubsidebarId: Ref<string>
  activeSubnavId: Ref<string | undefined>

  activeSubnav: ComputedRef<NavbarItem | undefined>
  activeMobileSubsidebar: ComputedRef<NavbarItem | undefined>

  toggleSubnav: (id: string) => void
  toggleMobileSubnav: (id: string) => void
}
```