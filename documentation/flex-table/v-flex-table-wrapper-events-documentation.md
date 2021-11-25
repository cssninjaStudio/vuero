---
disable_code: true
slimscroll: true
---

### VFlexTableWrapper Events

Here is the full events available for `<VFlexTableWrapper />` component:

| Event              | Callback                                                   | Description                                                              |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| @update:sort       | <span class="is-function">`(value: string) => void`</span> | Raised when a sort order is updated<br />**Requires `sort` props**       |
| @update:searchTerm | <span class="is-function">`(value: string) => void`</span> | Raised when a searchTerm is updated<br />**Requires `searchTerm` props** |
| @update:page       | <span class="is-function">`(value: number) => void`</span> | Raised when a page is updated<br />**Requires `page` props**             |
| @update:limit      | <span class="is-function">`(value: number) => void`</span> | Raised when a limit is updated<br />**Requires `limit` props**           |
