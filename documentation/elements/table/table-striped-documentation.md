---
disable_example: true
---

### Striped Table

Vuero provides a basic Html5 table powered by Bulma.
You sinply have to add the table class to a html5 table element.
You can also add the is-striped to apply striped styles to the table rows.

<!--code-->

```vue
<template>
  <div class="s-card">
    <table class="table is-striped is-fullwidth">
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Position</th>
        <th class="is-end">
          <div class="dark-inverted is-flex is-justify-content-flex-end">
            Actions
          </div>
        </th>
      </tr>
      <tr>
        <td>Tina</td>
        <td>Bergmann</td>
        <td>Head of Sales</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableContextMenuAlt />
          </div>
        </td>
      </tr>
      <tr>
        <td>John</td>
        <td>Wistmus</td>
        <td>Senior Executive</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableContextMenuAlt />
          </div>
        </td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>Watson</td>
        <td>Software Engineer</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableContextMenuAlt />
          </div>
        </td>
      </tr>
      <tr>
        <td>Jolaine</td>
        <td>Joestar</td>
        <td>HR Manager</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableContextMenuAlt />
          </div>
        </td>
      </tr>
      <tr>
        <td>Anders</td>
        <td>Jensen</td>
        <td>Accountant</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableContextMenuAlt />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
```

<!--/code-->
