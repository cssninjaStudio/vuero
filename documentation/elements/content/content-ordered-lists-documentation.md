### Ordered Lists

Ordered lists `ol` are also genrated using a div with the content class.
Ordered list bullets can be controlled with the type attribute.
Available types are `type="1"`, `type="A"`, `type="a"`, `type="I"`, `type="i"`

<!--code-->

```vue
<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <div class="content">
        <ol type="1">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol type="A">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol class="is-light" type="a">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol class="is-light" type="I">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
      </div>
    </div>

    <div class="column is-one-fifth">
      <div class="content">
        <ol class="is-light" type="i">
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
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
      <ol type="1">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol type="A">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol class="is-light" type="a">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol class="is-light" type="I">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </div>
  </div>
  <div class="column is-one-fifth">
    <div class="content">
      <ol class="is-light" type="i">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
    </div>
  </div>
</div>

<!--/example-->
