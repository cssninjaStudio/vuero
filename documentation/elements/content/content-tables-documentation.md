### Tables

You can also use the `content` class to wrap an html `table` element
to apply minimum styles to your table UI.
Please refer to the Vuero components section to find more advanced table
examples and layouts.

<!--code-->

```vue
<template>
  <div class="content">
    <table>
      <thead>
        <tr>
          <th>Heroes</th>
          <th>Power</th>
          <th>Availability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Superman</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
          </td>
          <td>
            <span class="tag is-rounded is-success">Available</span>
          </td>
        </tr>
        <tr>
          <td>Batman</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </td>
          <td>
            <span class="tag is-rounded">Unavailable</span>
          </td>
        </tr>
        <tr>
          <td>Deadpool</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </td>
          <td>
            <span class="tag is-rounded">Unavailable</span>
          </td>
        </tr>
        <tr>
          <td>Spawn</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star"></i>
          </td>
          <td>
            <span class="tag is-rounded is-success">Available</span>
          </td>
        </tr>
        <tr>
          <td>Galactus</td>
          <td>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
            <i class="fas fa-star warning-text"></i>
          </td>
          <td>
            <span class="tag is-rounded">Unavailable</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="content">
  <table>
    <thead>
      <tr>
        <th>Heroes</th>
        <th>Power</th>
        <th>Availability</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Superman</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
        </td>
        <td>
          <span class="tag is-rounded is-success">Available</span>
        </td>
      </tr>
      <tr>
        <td>Batman</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </td>
        <td>
          <span class="tag is-rounded">Unavailable</span>
        </td>
      </tr>
      <tr>
        <td>Deadpool</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </td>
        <td>
          <span class="tag is-rounded">Unavailable</span>
        </td>
      </tr>
      <tr>
        <td>Spawn</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star"></i>
        </td>
        <td>
          <span class="tag is-rounded is-success">Available</span>
        </td>
      </tr>
      <tr>
        <td>Galactus</td>
        <td>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
          <i class="fas fa-star warning-text"></i>
        </td>
        <td>
          <span class="tag is-rounded">Unavailable</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!--/example-->
