### Solid Colors

Vuero buttons can have solid colors. You can use the same classes
that are offered by the Bulma Framework. Available color classes are
`is-primary`, `is-info`, `is-success`, `is-warning`, `is-danger`,
`is-light`, `is-white`.

<!--code-->

```vue
<template>
  <div class="buttons">
    <a class="button v-button is-primary">Primary</a>
    <a class="button v-button is-info">Info</a>
    <a class="button v-button is-success">Success</a>
    <a class="button v-button is-warning">Warning</a>
    <a class="button v-button is-danger">Danger</a>
    <a class="button v-button is-light">Light</a>
    <a class="button v-button is-white">White</a>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <a class="button v-button is-primary" @click="clickMe">Primary</a>
  <a class="button v-button is-info" @click="clickMe">Info</a>
  <a class="button v-button is-success" @click="clickMe">Success</a>
  <a class="button v-button is-warning" @click="clickMe">Warning</a>
  <a class="button v-button is-danger" @click="clickMe">Danger</a>
  <a class="button v-button is-light" @click="clickMe">Light</a>
  <a class="button v-button is-white" @click="clickMe">White</a>
</div>

<!--/example-->
