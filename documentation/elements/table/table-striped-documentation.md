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
  <table class="table is-striped is-fullwidth">
    <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Position</th>
        <th scope="col" class="is-end">
          <div class="dark-inverted is-flex is-justify-content-flex-end">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tina</td>
        <td>Bergmann</td>
        <td>Head of Sales</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>John</td>
        <td>Wistmus</td>
        <td>Senior Executive</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>Watson</td>
        <td>Software Engineer</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>Jolaine</td>
        <td>Joestar</td>
        <td>HR Manager</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
      <tr>
        <td>Anders</td>
        <td>Jensen</td>
        <td>Accountant</td>
        <td class="is-end">
          <div class="is-flex is-justify-content-flex-end">
            <FlexTableDropdown />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
```

<!--/code-->
