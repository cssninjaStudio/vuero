---
outline: deep
---

# Landing Layout

![Landing layout](https://media.cssninja.io/screenshots/vuero-demo/dark/marketing-1.webp){.img-dark}
![Landing layout](https://media.cssninja.io/screenshots/vuero-demo/light/marketing-1.webp){.img-light}

## `LandingLayout` component

### Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `links` | Landing navigation items | `LandingNavItem[]` | `[]` |

### Slots

- `default`
- `logo`
- `nav-end`
- `nav-links`

### Types

#### LandingNavItem

```ts
interface LandingNavItem {
  label: string
  to: string
  active?: boolean
}
```


#### LandingFooterColumn

```ts
interface LandingFooterColumn {
  label: string
  children: {
    label: string
    to: string
  }[]
}
```


#### LandingSocialItem

```ts
interface LandingSocialItem {
  icon: string
  link: string
}
```
