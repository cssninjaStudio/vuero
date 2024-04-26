### Unordered Lists

By default, using an unordered `ul` list won't generate an html list.
This is part of the Bulma specification. To generate you unordered list,
wrap it inside a `div` with the `content` class. Lists can also
have the `is-light` modifier to change the text color.

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="content">
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ul class="is-light">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="columns">
  <div class="column is-one-fifth">
    <div class="content">
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ul class="is-light">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  </div>
</div>

<!--/example-->
