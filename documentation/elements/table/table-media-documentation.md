---
disable_example: true
---

### Media Table

Vuero provides a basic Html5 table powered by Bulma.
You sinply have to add the table class to a html5 table element.
You can easily add media elements like the huro avatars inside your table rows.

<!--code-->

```vue
<template>
  <div class="s-card demo-table">
    <table class="table is-hoverable is-fullwidth">
      <tr>
        <th class="is-media"></th>
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
        <td class="is-media">
          <div class="v-avatar">
            <img
              class="avatar"
              src="/images/avatars/svg/8.gif"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
          </div>
        </td>
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
        <td class="is-media">
          <div class="v-avatar">
            <img
              class="avatar"
              src="/images/avatars/svg/1.gif"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
          </div>
        </td>
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
        <td class="is-media">
          <div class="v-avatar">
            <img
              class="avatar"
              src="/images/avatars/svg/4.gif"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
          </div>
        </td>
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
        <td class="is-media">
          <div class="v-avatar">
            <span class="avatar is-fake is-info">
              <span>JD</span>
            </span>
          </div>
        </td>
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
        <td class="is-media">
          <div class="v-avatar">
            <img
              class="avatar"
              src="/images/avatars/svg/3.gif"
              alt=""
              @error.once="
                $event.target.src = 'https://via.placeholder.com/150x150'
              "
            />
          </div>
        </td>
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
